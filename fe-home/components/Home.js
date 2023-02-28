import React from "react";

// local components
import BreakLine from "./shared/Break";
import Summary from "./home/Summary";
import Education from "./home/Education";
import Experience from "./home/Experience";
import Repository from "./home/Repository";

const Home = ({ repositoryList }) => {
  return (
    <>
      <div className="grid grid-flow-row gap-4">
        <Summary />
        <Experience />
        <Education />
      </div>
      <Repository repositoryList={repositoryList} />
    </>
  );
};

export default Home;
