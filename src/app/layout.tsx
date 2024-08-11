"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { fontSans } from "@/app/ui/font";
import { ThemeProvider } from "@/components/theme-provider";
import MainNav from "@/components/main-nav";
import Body from "@/components/body";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Bocchi Anaba Portfolio",
//   description: "Powered by NOA ANABA Adrien Jean Bocchi"
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPanelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
  };
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Theme appearance="dark">
          {isPanelVisible && <ThemePanel />}
          <MainNav eventTogglePanel={() => togglePanel()} />
          {children}
        </Theme>
      </body>
    </html>
  );
}
