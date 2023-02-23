import "tailwindcss/tailwind.css";
import React, { useState } from "react";

// local components
import Menu from "./Menu";
import Burger from "./Burger";

const MENU_LIST = [
  { href: "/", name: "Home", icon: "" },
  { href: "/about", name: "About", icon: "" },
];

const RESUME_DATA = { href: "/resume", name: "Resume", icon: "" };

const Navbar = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2>{`{ DEV }`}</h2>
      </div>
      <div className="block lg:hidden">
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
          {MENU_LIST &&
            MENU_LIST.map((menu, menuIdx) => (
              <Menu
                key={menuIdx}
                data={menu}
                className="block mt-4 lg:inline-block lg:mt-0 text-emerald-200 hover:text-white mr-4"
              />
            ))}
        </div>
        <div>
          <Menu
            data={RESUME_DATA}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white mt-4 lg:mt-0"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
