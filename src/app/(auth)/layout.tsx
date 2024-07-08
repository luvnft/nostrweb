import { AuthLayout } from "@/components/Layout/AuthLayout/AuthLayout";

export const metadata = {
  title: "ATL5D Web",
  description: "Customized domains and websites for creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
