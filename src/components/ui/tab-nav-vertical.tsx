import {
  ArchiveIcon,
  BackpackIcon,
  Crosshair2Icon,
  HomeIcon,
  IdCardIcon,
  RocketIcon,
  StarFilledIcon
} from "@radix-ui/react-icons";
import { TabNav, Text } from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import "@/styles/nav-dialog.css";
import Image from "next/image";

interface TabNavVerticalProps {
  pathname: string;
}

const TabNavVertical: React.FC<TabNavVerticalProps> = ({ pathname }) => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/me.png"
          width={50}
          height={50}
          className="rounded-full hidden md:block"
          alt="Screenshots of Bocchi Anaba"
        />
      </div>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              <Link
                className={`flex items-center ${
                  pathname === "/" ? "active" : ""
                }`}
                href="/"
              >
                <HomeIcon className="mr-2" />
                <Text>Home</Text>
              </Link>
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              <Link
                className={`flex items-center ${
                  pathname === "/formations" ? "active" : ""
                }`}
                href="/formations"
              >
                <BackpackIcon className="mr-2" />
                <Text>Formations</Text>
              </Link>
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              className={`flex items-center ${
                pathname === "/experiences" ? "active" : ""
              }`}
              href="/experiences"
            >
              <RocketIcon className="mr-2" />
              <Text>Experiences</Text>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              className={`flex items-center ${
                pathname === "/projects" ? "active" : ""
              }`}
              href="/projects"
            >
              <ArchiveIcon className="mr-2" />
              <Text>Projects</Text>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              className={`flex items-center ${
                pathname === "/competences" ? "active" : ""
              }`}
              href="/competences"
            >
              <Crosshair2Icon className="mr-2" />
              <Text>Competences</Text>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              className={`flex items-center ${
                pathname === "/certifications" ? "active" : ""
              }`}
              href="/certifications"
            >
              <StarFilledIcon className="mr-2" />
              <Text>Certifications</Text>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              className={`flex items-center ${
                pathname === "/contact-us" ? "active" : ""
              }`}
              href="/contact-us"
            >
              <IdCardIcon className="mr-2" />
              <Text>Contact Me</Text>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

export default TabNavVertical;
