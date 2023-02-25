import "tailwindcss/tailwind.css";
import React from "react";
import { Menu as MenuIcon, X as XIcon } from "react-feather";

const Burger = (args) => {
  const { navbar, setNavbar, ...rest } = args;

  return (
    <button onClick={() => setNavbar(!navbar)} {...rest}>
      {navbar ? <XIcon size={22} /> : <MenuIcon size={22} />}
    </button>
  );
};

export default Burger;
