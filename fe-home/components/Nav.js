import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

// local components
import Menu from "./header/Menu";
import Theme from "./header/Theme";
import Burger from "./header/Burger";

const MENU_LIST = [
  { href: "/", name: "Home", icon: "" },
  { href: "/blog", name: "Blog", icon: "" },
  { href: "/about", name: "About", icon: "" },
];

const NavMenu = ({ setNavbar, menuList }) => {
  const [isActive, setIsActive] = useState(0);
  return (
    menuList &&
    menuList.map((menu, menuIdx) => (
      <Menu
        key={menuIdx}
        data={menu}
        onClick={(ev) => {
          setNavbar(false);
          setIsActive(menuIdx);
        }}
        className={`block py-2 lg:py-0 lg:inline-block text-white hover:text-yellow-300 ${
          isActive === menuIdx && "text-yellow-300"
        }`}
      />
    ))
  );
};

const Navbar = ({}) => {
  const [navbar, setNavbar] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-violet-500 to-purple-500 shadow">
      <div className="justify-between px-3 py-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between md:block">
          <Image
            width={50}
            height={50}
            alt="WP Logo"
            src="/authors/logo.png"
            className="img"
          />
          <div className="md:hidden">
            <Theme
              mounted={mounted}
              theme={theme}
              systemTheme={systemTheme}
              setTheme={setTheme}
              className="text-yellow-100 mr-2 mt-4 hover:text-yellow-300 lg:mt-1"
            />
            <Burger
              navbar={navbar}
              setNavbar={setNavbar}
              className="p-2 text-yellow-100 rounded-md outline-none"
            />
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center mt-4 md:block md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
            <NavMenu
              navbar={navbar}
              setNavbar={setNavbar}
              menuList={MENU_LIST}
            />
          </ul>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Theme
            mounted={mounted}
            theme={theme}
            systemTheme={systemTheme}
            setTheme={setTheme}
            className="text-yellow-100 hover:text-yellow-300 mt-4 lg:mt-1"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
