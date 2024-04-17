import type { Metadata } from "next";

import "./globals.css";


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
       <script src="https://cdn.tailwindcss.com"></script>

      <body >{children}</body>
    </html>
  );
}
