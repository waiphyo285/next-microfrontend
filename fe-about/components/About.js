import "tailwindcss/tailwind.css";
import React from "react";

// local components
import Profile from "./Profile";
import Summary from "./Summary";

const About = () => {
  return (
    <div className="grid grid-flow-row gap-4 md:grid-flow-col">
      <div className="my-16 px-16">
        <Profile />
      </div>
      <div className="my-16 px-16">
        <Summary />
      </div>
    </div>
  );
};

export default About;
