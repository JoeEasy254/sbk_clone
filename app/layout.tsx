import type { Metadata } from "next";

import "./globals.css";

import "./styles.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Smartbrains-Africa",
  description: "A smartbrains clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}
