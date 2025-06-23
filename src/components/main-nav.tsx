"use client";

import { Avatar } from "@radix-ui/react-avatar";
import {
  ArchiveIcon,
  BackpackIcon,
  Crosshair2Icon,
  HamburgerMenuIcon,
  HomeIcon,
  IdCardIcon,
  MagicWandIcon,
  MoonIcon,
  PersonIcon,
  RocketIcon,
  StarFilledIcon,
  SunIcon
} from "@radix-ui/react-icons";
import { NextPage } from "next";
import { Button, Flex, TabNav, Text, TextField } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import TabNavVertical from "./ui/tab-nav-vertical";

interface Props {
  eventTogglePanel: () => void;
}

const MainNav: NextPage<Props> = (props) => {
  const pathname = usePathname();

  console.log({ pathname });

  const [isPanelVisible, setPanelVisible] = useState(false);

  const handleTogglePanel = () => {
    props.eventTogglePanel();
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-auto bg-white/20 backdrop-blur-md shadow-xl rounded-2xl flex items-center px-4 py-2 transition-all border border-white/30">
      {/* Avatar/logo */}
      <div className="flex-shrink-0">
        <Image
          src="/me.png"
          width={50}
          height={50}
          className="rounded-full border-2 border-yellow-400 shadow-md bg-white/60 p-1 hidden md:block transition-transform hover:scale-105"
          alt="Screenshots of Bocchi Anaba"
        />
      </div>
      {/* Menu hamburger mobile */}
      <div className="block md:hidden flex-shrink-0">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="ghost" className="hover:bg-yellow-100">
              <HamburgerMenuIcon />
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-0 left-0 h-full w-[75%] max-w-xs bg-white/90 shadow-lg rounded-r-2xl transform transition-transform duration-300 ease-in-out">
              <Flex direction="column" gap="3" p="4">
                <Dialog.Title className="font-bold text-lg mb-4 text-blue-900">Menu</Dialog.Title>
                <TabNavVertical pathname={pathname} />
              </Flex>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      {/* Menu desktop */}
      <div className="hidden md:flex flex-1 mx-4 justify-center">
        <TabNav.Root className="flex gap-2 flex-nowrap justify-center">
          <TabNav.Link active={pathname === "/"} href="/" className="nav-link">
            <HomeIcon className="mx-2" />
            <p className="hidden lg:block">Accueil</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/formations"} href="/formations" className="nav-link">
            <BackpackIcon className="mx-2" />
            <p className="hidden lg:block">Formations</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/experiences"} href="/experiences" className="nav-link">
            <RocketIcon className="mx-2" />
            <p className="hidden lg:block">Expériences</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/projects"} href="/projects" className="nav-link">
            <ArchiveIcon className="mx-2" />
            <p className="hidden lg:block">Projets</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/competences"} href="/competences" className="nav-link">
            <Crosshair2Icon className="mx-2" />
            <p className="hidden lg:block">Compétences</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/certifications"} href="/certifications" className="nav-link">
            <StarFilledIcon className="mx-2" />
            <p className="hidden lg:block">Certifications</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/contact-us"} href="/contact-us" className="nav-link">
            <IdCardIcon className="mx-2" />
            <p className="hidden lg:block">Contact</p>
          </TabNav.Link>
        </TabNav.Root>
      </div>
      {/* MagicWand bouton */}
      <div className="flex-shrink-0">
        <Button variant="ghost" onClick={handleTogglePanel} className="hover:bg-yellow-100">
          <MagicWandIcon />
        </Button>
      </div>
    </nav>
  );
};

export default MainNav;
