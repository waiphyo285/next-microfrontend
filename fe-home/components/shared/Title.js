import React from "react";
import "tailwindcss/tailwind.css";

const Title = (args) => {
  const { icon, title, ...rest } = args;
  return (
    <h1 {...rest}>
      {icon && <span className="pt-1 mr-3">{icon}</span>}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
        {title}
      </span>
    </h1>
  );
};

export default Title;
