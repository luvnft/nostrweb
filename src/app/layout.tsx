import { ReactNode } from "react";
import { ThemeWrapper } from "@/mui/ThemeWrapper";
import { AppWrapper } from "@/components/Layout/AppWrapper";
import Providers from "@/utils/tanstack/providers.client";
import { AuthContext } from "@/services/nostr/nostr";

export const metadata = {
  title: "ATL5D Web",
  description: "Customized domains and websites for creators.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <ThemeWrapper>
        <Providers>
          <AppWrapper>{children}</AppWrapper>
        </Providers>
      </ThemeWrapper>
    </html>
  );
}
