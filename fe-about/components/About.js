import React from "react";

// local components
import Profile from "./Profile";
import Summary from "./Summary";
import Address from "./Address";

const About = () => {
  return (
    <div className="grid grid-flow-row gap-4 md:grid-flow-col">
      <div className="px-8 md:px-16 md:my-12">
        <Profile />
      </div>
      <div className="my-0 px-8 md:px-16 md:my-16">
        <Summary />
        <Address />
      </div>
    </div>
  );
};

export default About;
