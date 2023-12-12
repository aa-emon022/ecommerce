import { useEffect, useState } from "react";
import { ThemeProvider } from "../components/darkMode/darkContext.js";
import Btn from "../components/btn";
import MenuBar from './MenuBar'

function Layout1(props) {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  useEffect(() => {
    const storeTheme = localStorage.getItem("themeMode");

    if (storeTheme) {
      setThemeMode(storeTheme);
    } else {
      setThemeMode("light");
    }

    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="bg-white dark:bg-slate-800 rounded-lg  ring-1 ring-slate-900/5 shadow-xl w-full h-[8rem] relative">
          <Btn />
          <MenuBar/>
        </div>
      </ThemeProvider>

      {props.children}
    </>
  );
}

export default Layout1;
