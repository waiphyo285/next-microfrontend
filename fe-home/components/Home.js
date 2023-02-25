import React from "react";

// local components
import BreakLine from "./common/Break";
import Summary from "./home/Summary";
import Experience from "./home/Experience";
import Education from "./home/Education";

const Home = () => {
  return (
    <div className="grid grid-flow-row gap-4">
      <Summary />
      <div className="-mt-5">
        <BreakLine />
      </div>
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
