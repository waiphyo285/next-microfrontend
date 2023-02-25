import React from "react";

const SubTitle = (args) => {
  const { title, ...rest } = args;
  return (
    <h2 {...rest}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
        {title}
      </span>
    </h2>
  );
};

export default SubTitle;
