import "tailwindcss/tailwind.css";
import React from "react";
import { Sun as SunIcon, Moon as MoonIcon } from "react-feather";

const Theme = (args) => {
  const { mounted, systemTheme, theme, setTheme, ...rest } = args;

  if (!mounted) return null;

  const curTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      role="button"
      onClick={() =>
        curTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
      {...rest}
    >
      {theme === "dark" ? <SunIcon size={22} /> : <MoonIcon size={22} />}
    </button>
  );
};

export default Theme;
