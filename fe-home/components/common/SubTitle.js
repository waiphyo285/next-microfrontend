import React from "react";
import { Umbrella } from "react-feather";

const SubTitle = (args) => {
  const { icon, title, ...rest } = args;
  return (
    <h2 {...rest}>
      {icon && <span className="pt-1 mr-3">{icon}</span>}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
        {title}
      </span>
    </h2>
  );
};

export default SubTitle;
