"use client";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useSettingsSite } from "@/hooks/useSettingsSite";
import { useParams } from "next/navigation";
import { useFormik } from "formik";
import { TitleDescription } from "@/components/SettingPage/components/TitleDescription";
import { validationSchemaMakePrivateSite } from "@/validations/rules";
import { Contributors } from "@/components/SettingPage/components/Contributors";
import { DesignBranding } from "@/components/SettingPage/components/DesignBranding";
import { Recommendation } from "@/components/SettingPage/components/Recommendation";
import { Icon } from "@/components/SettingPage/components/Icon";
import { ImageBanner } from "@/components/SettingPage/components/Image";
import { Navigation } from "@/components/SettingPage/components/Navigation";
import { editSite } from "@/services/nostr/api";
import { ReturnSettingsSiteDataType } from "@/services/sites.service";
import { Hashtags } from "@/components/SettingPage/components/Hashtags";
import { AccentColor } from "@/components/SettingPage/components/AccentColor";
import { Kinds } from "@/components/SettingPage/components/Kinds";
import { WebsiteAddress } from "./components/WebsiteAddress";
import { Plugins } from "@/components/SettingPage/components/Plugins";

const initialSettingValue: ReturnSettingsSiteDataType = {
  id: "",
  themeId: "",
  themeName: "",
  contributors: [],
  name: "",
  title: "",
  description: "",
  timezone: {
    name: "",
    label: "",
  },
  language: "",
  metaDescription: "",
  metaTitle: "",
  ogDescription: "",
  ogTitle: "",
  ogImage: "",
  xTitle: "",
  xDescription: "",
  xImage: "",
  fTitle: "",
  fDescription: "",
  socialAccountFaceBook: "",
  socialAccountX: "",
  icon: "",
  image: "",
  logo: "",
  url: "",
  navigation: {
    primary: [],
    secondary: [],
  },
  hashtags: [],
  kinds: [],
  accentColor: "",
  codeinjection_foot: "",
  codeinjection_head: "",
};

export const SettingPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] = useState(initialSettingValue);

  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const siteId = Array.isArray(params.id) ? params.id[0] : params.id;

  const {
    data,
    isLoading: isLoadingSetting,
    isFetching,
  } = useSettingsSite(siteId);

  const {
    values,
    submitForm,
    handleChange,
    setFieldValue,
    handleBlur,
    setValues,
  } = useFormik({
    initialValues: initialSettingValue,
    validationSchema: validationSchemaMakePrivateSite,
    onSubmit: async (values) => {
      if (!_.isEqual(values, initialData)) {
        setIsLoading(true);

        setInitialData(() => values);

        console.log({ values });

        try {
          await editSite(values);
          enqueueSnackbar("Edit data success!", {
            autoHideDuration: 3000,
            variant: "success",
            anchorOrigin: {
              horizontal: "right",
              vertical: "bottom",
            },
          });
        } catch (e: any) {
          enqueueSnackbar("Error: " + e.toString(), {
            autoHideDuration: 3000,
            variant: "error",
            anchorOrigin: {
              horizontal: "right",
              vertical: "bottom",
            },
          });
        } finally {
          setIsLoading(false);
        }
      }
    },
  });

  const handleChangeNavigation = (input: {
    id: string;
    type: "primary" | "secondary";
    field: "title" | "link";
    value: string;
  }) => {
    const navigation = values.navigation;

    const item = navigation[input.type].find((item) => item.id === input.id);

    if (item) {
      item[input.field] = input.value;
    }

    setFieldValue("navigation", navigation);
  };

  const handleAddLinkNavigation = (type: "primary" | "secondary") => {
    setFieldValue("navigation", {
      ...values.navigation,
      [type]: [
        ...values.navigation[type],
        { title: "", link: "", id: "" + Date.now() },
      ],
    });
  };

  const handleChangeHashtags = (value: string | string[]) => {
    setFieldValue("hashtags", value);
  };

  const handleChangeContributors = (pubkeys: string[]) => {
    setFieldValue("contributors", pubkeys);
  };

  const handleChangeKinds = (value: number | number[]) => {
    setFieldValue("kinds", value);
  };

  const handleChangeColor = (color: string) => {
    setFieldValue("accentColor", color);
  };

  const handleRemoveLinkNavigation = (input: {
    id: string;
    type: "primary" | "secondary";
  }) => {
    const navigation = values.navigation;

    navigation[input.type] = navigation[input.type].filter(
      (item) => item.id !== input.id,
    );

    setFieldValue("navigation", navigation);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
      const initial = _.cloneDeep(data);
      setInitialData(initial);
      console.log("initial values", initial);
    }
  }, [setValues, data]);

  // if (isLoadingSetting || isFetching) {
  //   return (
  //     <SpinerWrap>
  //       <SpinerCircularProgress />
  //     </SpinerWrap>
  //   );
  // }

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        General settings
      </Typography>

      <WebsiteAddress
        url={values.url}
        siteId={values.id}
        handleBlur={handleBlur}
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <TitleDescription
        title={values.title}
        description={values.description}
        handleBlur={handleBlur}
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      {/* <MetaData
        title={values.metaTitle}
        description={values.metaDescription}
        handleBlur={handleBlur}
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      /> */}

      <Contributors
        handleChangeContributors={handleChangeContributors}
        contributors={values.contributors}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <Hashtags
        handleChangeHashtags={handleChangeHashtags}
        contributors={values.contributors}
        selectedHashtags={values.hashtags}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <Kinds
        handleChangeKinds={handleChangeKinds}
        selectedKinds={values.kinds}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <Plugins
        codeinjectionHead={values.codeinjection_head}
        codeinjectionFoot={values.codeinjection_foot}
        handleBlur={handleBlur}
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        Design
      </Typography>

      <DesignBranding
        siteId={values.id}
        themeName={values.themeName}
        themeId={values.themeId}
      />

      <AccentColor
        handleChangeColor={handleChangeColor}
        color={values.accentColor}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <Icon
        icon={values.icon}
        handleBlur={handleBlur}
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <ImageBanner
        image={values.image}
        handleBlur={handleBlur}
        handleChange={handleChange}
        submitForm={submitForm}
        isLoading={isLoading}
      />

      <Navigation
        navigation={values.navigation}
        handleChangeNavigation={handleChangeNavigation}
        submitForm={submitForm}
        isLoading={isLoading}
        handleAddLinkNavigation={handleAddLinkNavigation}
        handleRemoveLinkNavigation={handleRemoveLinkNavigation}
      />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        Growth
      </Typography>

      <Recommendation />
    </>
  );
};
