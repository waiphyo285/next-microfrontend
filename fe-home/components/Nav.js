import "tailwindcss/tailwind.css";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { Sun as SunIcon, Moon as MoonIcon } from "react-feather";

// local components
import Menu from "./Menu";
import Burger from "./Burger";

const MENU_LIST = [
  { href: "/", name: "Home", icon: "" },
  { href: "/about", name: "About", icon: "" },
];

const RESUME_DATA = { href: "/resume", name: "Resume", icon: "" };

const NavMenu = ({ menuList }) => {
  return (
    menuList &&
    menuList.map((menu, menuIdx) => (
      <Menu
        key={menuIdx}
        data={menu}
        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4"
      />
    ))
  );
};

const DarkMode = ({ theme, setTheme }) => {
  const handleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <button
      role="button"
      onClick={handleTheme}
      className="text-yellow-500 hover:text-yellow-300 mt-4 lg:mt-1"
    >
      {theme === "dark" ? <SunIcon size={22} /> : <MoonIcon size={22} />}
    </button>
  );
};

const Navbar = ({}) => {
  const { theme, setTheme } = useTheme();
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2>{`{ DEV }`}</h2>
      </div>
      <div className="inline-b lg:hidden">
        <Burger
          isExpanded={isExpanded}
          toggleExpansion={toggleExpansion}
          className="flex items-center px-3 py-2 border rounded text-emerald-200 border-emerald-400 hover:text-white hover:border-white"
        />
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <NavMenu menuList={MENU_LIST} />
        </div>
        <div>
          <DarkMode theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
