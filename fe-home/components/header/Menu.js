import React from "react";
import Link from "next/link";

const Menu = (args) => {
  const { href, name } = args.data;

  return (
    <Link href={href} {...args}>
      {name}
    </Link>
  );
};

export default Menu;
