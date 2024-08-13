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
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ParticlesOptions, type Container } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// export const metadata: Metadata = {
//   title: "Bocchi Anaba Portfolio",
//   description: "Powered by NOA ANABA Adrien Jean Bocchi"
// };
// import particleOptions from "@/lib/utils";
import particle from "@/lib/utils";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPanelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
  };

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {
    console.log(container);
    // Since this function must return a promise, return a resolved promise
    return Promise.resolve();
  };

  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Theme appearance="dark">
          {isPanelVisible && <ThemePanel />}
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={particle}
            />
          )}
          <MainNav eventTogglePanel={() => togglePanel()} />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
