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
    <div className="flex justify-around items-center py-4">
      <Image
        src="/me.png"
        width={50}
        height={50}
        className="rounded-full hidden md:block"
        alt="Screenshots of Bocchi Anaba"
      />
      <div className="block md:hidden">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="ghost">
              <HamburgerMenuIcon />
            </Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-0 left-0 h-full w-[75%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
              <Flex direction="column" gap="3" p="4">
                <Dialog.Title className="font-bold text-lg mb-4">
                  Menu
                </Dialog.Title>
                <TabNavVertical pathname={pathname} />
              </Flex>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className="hidden md:block">
        <TabNav.Root>
          <TabNav.Link active={pathname === "/"} href="/">
            <HomeIcon className="mx-2" />
            <p className="hidden lg:block">Home</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/formations"} href="/formations">
            <BackpackIcon className="mx-2" />
            <p className="hidden lg:block">Formations</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/experiences"} href="/experiences">
            <RocketIcon className="mx-2" />
            <p className="hidden lg:block">Experiences</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/projects"} href="/projects">
            <ArchiveIcon className="mx-2" />
            <p className="hidden lg:block">Projects</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/competences"} href="/competences">
            <Crosshair2Icon className="mx-2" />
            <p className="hidden lg:block">Competences</p>
          </TabNav.Link>
          <TabNav.Link
            active={pathname === "/certifications"}
            href="/certifications"
          >
            <StarFilledIcon className="mx-2" />
            <p className="hidden lg:block">Certifications</p>
          </TabNav.Link>
          <TabNav.Link active={pathname === "/contact-us"} href="/contact-us">
            <IdCardIcon className="mx-2" />
            <p className="hidden lg:block">Contact Me</p>
          </TabNav.Link>
        </TabNav.Root>
      </div>
      <Button variant="ghost" onClick={handleTogglePanel}>
        <MagicWandIcon />
      </Button>
      {/* <Button variant="ghost">
        <HamburgerMenuIcon />
      </Button> */}
    </div>
  );
};

export default MainNav;
