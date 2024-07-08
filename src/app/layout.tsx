import { ReactNode } from "react";
import { ThemeWrapper } from "@/mui/ThemeWrapper";
import { AppWrapper } from "@/components/Layout/AppWrapper";
import Providers from "@/utils/tanstack/providers.client";

export const metadata = {
  title: "ATL5D Web",
  description: "Customized domains and websites for creators.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
<<<<<<< HEAD
    <html lang="en" style={{ height: "100%" }}>
=======
    <html
      lang="en"
      style={{
        height: "100%",
        scrollBehavior: "smooth",
        scrollPaddingTop: "48px",
      }}
    >
>>>>>>> 1b7bcad5f822c81a1859a396c713f78e40fec45d
      <ThemeWrapper>
        <Providers>
          <AppWrapper>{children}</AppWrapper>
        </Providers>
      </ThemeWrapper>
    </html>
  );
}
