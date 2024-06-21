"use client";
import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import { AppBar, AppBarProps } from "@mui/material";
import { SIDEBAR_WIDTH } from "@/consts";

interface IAppBar {
  isDesktop?: boolean;
}

export type IStyledAppBar = IAppBar & AppBarProps;

export const StyledAppBar = styled(
  forwardRef<HTMLAnchorElement, IStyledAppBar>(
    function MainContentName(props, ref) {
      const exclude = new Set(["isDesktop"]);
      const omitProps = Object.fromEntries(
        Object.entries(props).filter((e) => !exclude.has(e[0])),
      );

      return (
        <AppBar
          sx={{ display: { lg: "none" } }}
          component="nav"
          ref={ref}
          {...omitProps}
        />
      );
    },
  ),
)(({ isDesktop = false }) => ({
  width: `calc(100% - ${isDesktop ? SIDEBAR_WIDTH : 0}px)`,
}));
