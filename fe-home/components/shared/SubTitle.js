import React from "react";
import "tailwindcss/tailwind.css";

const SubTitle = (args) => {
  const { icon, title, ...rest } = args;
  return (
    <h2 {...rest}>
      {icon && <span className="pt-1 mr-3">{icon}</span>}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
        {title}
      </span>
    </h2>
  );
};

export default SubTitle;
