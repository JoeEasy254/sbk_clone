import type { Metadata } from "next";

import "./globals.css";

import "./styles.css";



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
     

      <body>{children}</body>
    </html>
  );
}
