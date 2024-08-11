import { NextPage } from "next";
import { ThemeProvider } from "./theme-provider";
import MainNav from "./main-nav";
import { useTheme } from "next-themes";

const Body: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  const { setTheme } = useTheme();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <MainNav /> */}
      {children}
    </ThemeProvider>
  );
};

export default Body;
