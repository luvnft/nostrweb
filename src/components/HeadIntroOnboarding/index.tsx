"use client";
import {
  StyledContainerIntro,
  StyledTypographyCaption,
  StyledTypographySubtitle,
  StyledTypographyTitle,
} from "@/components/HeadIntroOnboarding/styled";

export const HeadIntroOnboarding = () => {
  return (
    <StyledContainerIntro maxWidth="lg">
      <StyledTypographyCaption variant="caption" display="block">
        WEB
      </StyledTypographyCaption>

      <StyledTypographyTitle variant="h1">
        Create a beautiful nostr-based website in seconds
      </StyledTypographyTitle>

      <StyledTypographySubtitle variant="subtitle1">
        Easy to set up. Self-hostable. Just works.
      </StyledTypographySubtitle>
    </StyledContainerIntro>
  );
};
