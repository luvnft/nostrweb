"use client";
import {
  StyledContainerIntro,
  StyledLogo,
  StyledTypographySubtitle,
  StyledTypographyTitle,
} from "@/components/HeadIntroOnboarding/styled";
import { Button } from "@mui/material";
import { Logo } from "@/components/Logo";

export const HeadIntroOnboarding = () => {
  return (
    <StyledContainerIntro maxWidth="lg">
<<<<<<< HEAD
      <StyledTypographyCaption variant="caption" display="block">
        WEB
      </StyledTypographyCaption>
=======
      <StyledLogo>
        <Logo />
      </StyledLogo>
>>>>>>> 1b7bcad5f822c81a1859a396c713f78e40fec45d

      <StyledTypographyTitle variant="h1">
        Beautiful nostr-based websites for creators
      </StyledTypographyTitle>

      <StyledTypographySubtitle variant="subtitle1">
        Easy setup. Self-hostable. Just works.
      </StyledTypographySubtitle>

      <Button
        size="large"
        variant="contained"
        color="decorate"
        href="#themes-onboarding"
      >
        <b>Pick a theme to start</b>
      </Button>
    </StyledContainerIntro>
  );
};
