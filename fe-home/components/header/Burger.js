import React from "react";
import { Wind as MenuIcon, X as CloseIcon } from "react-feather";

const Burger = (args) => {
  const { navbar, setNavbar, ...rest } = args;

  return (
    <button onClick={() => setNavbar(!navbar)} {...rest}>
      {navbar ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
    </button>
  );
};

export default Burger;
