"use client";
import { StyledPreviewTestSite } from "@/components/Pages/Preview/styled";
// import Image, { StaticImageData } from "next/image";
import { PreviewNavigation } from "@/components/PreviewNavigation";
import { useSearchParams, redirect } from "next/navigation";
import { THEMES_PREVIEW } from "@/consts";
import { AuthContext, userPubkey } from "@/services/nostr/nostr";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  preparePreview,
  renderPreview,
  setPreviewSettings,
  setPreviewTheme,
} from "@/services/nostr/themes";
import { setHtml } from "libnostrsite";
import { Box } from "@mui/material";
import { SpinerCircularProgress, SpinerWrap } from "@/components/Spiner";

export const Preview = () => {
  const params = useSearchParams();
  const tag = params.get("tag");
  const themeId = params.get("themeId");
  const theme = THEMES_PREVIEW.find((el) => el.id === themeId);
  const kinds = (params.get("kinds") || "")
    .split(",")
    .filter((k) => k.trim())
    .map((k) => parseInt(k));
  if (!kinds.length)
    kinds.push(
      tag === "photography" || tag === "magazine" || tag === "podcast"
        ? 1
        : 30023,
    );
  const authed = useContext(AuthContext);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!themeId || !theme) return;

    if (authed) {
      setPreviewTheme(themeId);

      setPreviewSettings({
        admin: userPubkey,
        // FIXME DEBUG
        contributors: [
          "1bc70a0148b3f316da33fe3c89f23e3e71ac4ff998027ec712b905cd24f6a411",
        ], //[userPubkey],
        kinds,
        hashtags,
      });

      // setLoading(true)
      async function render(path: string) {
        const html = await renderPreview(path);
        const iframe = iframeRef.current;
        if (!iframe) throw new Error("No iframe");
        iframe.src = "/preview.html?" + Math.random();
        iframe.onload = async () => {
          const cw = iframe.contentWindow!;
          await setHtml(html, cw.document, cw);

          // // @ts-ignore
          // frame.style.opacity = "1";

          const links = cw.document.querySelectorAll("a");
          console.log("links", links);
          // setLoading(false)
          for (const l of links) {
            if (!l.href) continue;
            try {
              const url = new URL(l.href, document.location.href);
              if (url.origin === document.location.origin) {
                l.addEventListener("click", async (e: Event) => {
                  e.preventDefault();
                  console.log("clicked", e.target, url.pathname);
                  render(url.pathname);
                });
              }
            } catch {}
          }
        };
      }

      preparePreview().then(() => render("/")); //.finally(() => setLoading(false));
    } else {
      iframeRef.current!.src = theme.url;
    }
  }, [authed, kinds, hashtags, themeId, iframeRef]);

  if (!themeId || !theme) {
    return redirect("/");
  }

  const onContentSettings = async (hashtagsAndKinds: string[]) => {
    setHashtags(hashtagsAndKinds);
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
            <SpinerCircularProgress />
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
        {/* <Image src={theme?.preview as StaticImageData} alt="test site" /> */}
      </StyledPreviewTestSite>

      <PreviewNavigation onContentSettings={onContentSettings} />
    </>
  );
};
