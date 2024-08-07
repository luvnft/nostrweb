"use client";
import { HeaderOnboarding } from "@/components/HeaderOnboarding";
import { HeadIntroOnboarding } from "@/components/HeadIntroOnboarding";
import { ThemesOnboarding } from "@/components/ThemesOnboarding";
import { Benefits } from "@/components/Pages/Onboarding/components/Benefits";
import { FAQ } from "@/components/Pages/Onboarding/components/FAQ";
import { Pricing } from "@/components/Pages/Onboarding/components/Pricing";
import { Footer } from "@/components/Pages/Onboarding/components/Footer";

export const Onboarding = () => {
  return (
    <>
      <HeaderOnboarding />
      <HeadIntroOnboarding />
      <ThemesOnboarding />
      <Benefits />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  );
};
