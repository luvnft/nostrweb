"use client";
import { StyledPreviewTestSite } from "@/components/Pages/Preview/styled";
import { PreviewNavigation } from "@/components/PreviewNavigation";
import { useSearchParams, redirect, useRouter } from "next/navigation";
import { THEMES_PREVIEW } from "@/consts";
import { AuthContext, userPubkey } from "@/services/nostr/nostr";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  getPreviewTopHashtags,
  getPreviewSiteId,
  renderPreview,
  setPreviewSettings,
  getPreviewHashtags,
  getPreviewKinds,
  Mutex,
} from "@/services/nostr/themes";
import { Box } from "@mui/material";
import { SpinerCircularProgress, SpinerWrap } from "@/components/Spiner";
import { SpinnerCustom } from "@/components/SpinnerCustom";

// const hashtags = [
//   "#cooking",
//   "#photography",
//   "#nostr",
//   "#travel",
//   "#grownostr",
// ];

const kinds: { [key: number]: string } = {
  1: "Notes",
  30023: "Posts",
};

const mutex = new Mutex();
let mounted = false;

export const Preview = () => {
  const router = useRouter();
  const params = useSearchParams();
  // const tag = params.get("tag");
  const themeId = params.get("themeId");
  const siteId = params.get("siteId");
  const theme = THEMES_PREVIEW.find((el) => el.id === themeId);
  // const getKinds = (params.get("kinds") || "")
  //   .split(",")
  //   .filter((k) => k.trim())
  //   .map((k) => parseInt(k));
  // if (!getKinds.length)
  //   getKinds.push(
  //     tag === "photography" || tag === "magazine" || tag === "podcast"
  //       ? 1
  //       : 30023
  //   );

  // FIXME default for testing
  const [contributor] = useState<string>(
    "4657dfe8965be8980a93072bcfb5e59a65124406db0f819215ee78ba47934b3e",
    //    "1bc70a0148b3f316da33fe3c89f23e3e71ac4ff998027ec712b905cd24f6a411"
  );
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagsSelected, setHashtagsSelected] = useState<
    string[] | undefined
  >(undefined);
  const [kindsSelected, setKinds] = useState<number[] | undefined>(undefined);
  const authed = useContext(AuthContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => { 
    mounted = true;
  }, [])

  useEffect(() => {
    if (!themeId || !theme) return;

    if (authed) {
      mutex.run(async () => {
        setLoading(true);

        const start = Date.now();

        const updated = await setPreviewSettings({
          siteId: siteId || undefined,
          themeId,
          admin: userPubkey,
          contributors: contributor ? [contributor] : [userPubkey],
          kinds: kindsSelected,
          hashtags: hashtagsSelected,
        });

        if (updated || mounted) {

          mounted = false;

          // set possible hashtags
          setHashtags(await getPreviewTopHashtags());

          // set selected ones
          setHashtagsSelected(getPreviewHashtags());
          setKinds(getPreviewKinds());

          // update the preview html
          await renderPreview(iframeRef.current!);
          console.log("updated preview in", Date.now() - start);

          // FIXME remove when we fix slow css issues
          //          setTimeout(() => setLoading(false), 1000);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    } else if (!siteId) {
      iframeRef.current!.src = theme.url;
    }
  }, [
    authed,
    themeId,
    theme,
    siteId,
    contributor,
    kindsSelected,
    hashtagsSelected,
    iframeRef,
    setHashtags,
    setKinds,
    setHashtagsSelected,
    setLoading,
  ]);

  if (!themeId || !theme) {
    return redirect("/");
  }

  const onContentSettings = async (hashtags: string[], kinds: number[]) => {
    console.log("onContentSettings", hashtags, kinds);
    setHashtagsSelected(hashtags);
    setKinds(kinds);
  };

  const onUseTheme = async () => {
    const siteId = getPreviewSiteId();
    router.push(`/design?themeId=${themeId}&siteId=${siteId}`);
  };

  const onChangeTheme = async (id: string) => {
    const newParams = new URLSearchParams(params);

    newParams.set("themeId", id);

    router.push(`?${newParams.toString()}`);
  };

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 99,
            background: "#fff",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SpinerWrap>
            <SpinnerCustom />
          </SpinerWrap>
        </Box>
      )}

      <StyledPreviewTestSite>
        <iframe
          ref={iframeRef}
          frameBorder={0}
          width={"100%"}
          height={"100%"}
        ></iframe>
      </StyledPreviewTestSite>

      <PreviewNavigation
        onChangeTheme={onChangeTheme}
        kindsSelected={kindsSelected || []}
        hashtagsSelected={hashtagsSelected || []}
        onContentSettings={onContentSettings}
        hashtags={hashtags}
        kinds={kinds}
        onUseTheme={onUseTheme}
      />
    </>
  );
};
