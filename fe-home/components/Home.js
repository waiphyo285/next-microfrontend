import "tailwindcss/tailwind.css";
import React from "react";

// local components
import Summary from "./home/Summary";

const Home = () => {
  return (
    <div className="grid grid-flow-row gap-4 md:grid-flow-col">
      <Summary />
    </div>
  );
};

export default Home;
