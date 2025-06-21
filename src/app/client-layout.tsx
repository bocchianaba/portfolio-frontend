"use client";

import { Theme, ThemePanel } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ParticlesOptions, type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { particleOptions } from "@/lib/utils";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPanelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
  };

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {
    console.log(container);
    return Promise.resolve();
  };

  return (
    <Theme appearance="dark">
      {isPanelVisible && <ThemePanel />}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
      )}
      <MainNav eventTogglePanel={() => togglePanel()} />
      {children}
      <Footer />
    </Theme>
  );
} 