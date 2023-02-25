import React from "react";
import Image from "next/image";

// local components
import BreakLine from "../common/Break";
import SubTitle from "../common/SubTitle";

const EXP_LIST = [
  {
    company: "D3-SD Pte Ltd",
    duration: "Sep 2022 - Present",
    position: "Software Engineer",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    company: "Global New Wave Technology",
    duration: "Dec 2019 - Present",
    position: "Backend Developer",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    company: "Global Connect Asia",
    duration: "Sep 2019 - Nov 2019",
    position: "Jr. Odoo Developer",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    company: "Global Connect Asia",
    duration: "May 2019 - Jul 2019",
    position: "Internship Program",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
];

const Details = (args) => {
  const { detailsList, ...rest } = args;

  return (
    <ol {...rest}>
      {detailsList &&
        detailsList.map((exp, expIdx) => (
          <li key={expIdx}>
            <div className="flex-start flex items-center">
              <span className="-ml-[5px] h-[9px] w-[9px] rounded-full bg-violet-300"></span>
              <h4 className="ml-4 text-xl font-semibold text-lg text-violet-500">
                {exp.position}, {exp.company}
              </h4>
            </div>
            <div className="ml-5 mb-4">
              <span className="text-sm transition duration-150 ease-in-out">
                {exp.duration}
              </span>
              <div className="mt-4 mb-4 pb-2 text-md">{exp.responsibility}</div>
              <BreakLine />
            </div>
          </li>
        ))}
    </ol>
  );
};

const Experience = () => {
  return (
    <div className="grid grid-flow-row gap-4 md:grid-flow-col">
      <div className="px-8 lg:my-16 lg:px-16">
        <Image
          priority
          width={300}
          height={300}
          alt="Software development"
          src="/information/dev_productivity.svg"
        />
      </div>
      <div className="grid grid-flow-row gap-4 md:grid-flow-col">
        <div className="my-8 px-8 md:px-16">
          <SubTitle
            title="Experiences"
            className="text-2xl font-extrabold mb-4"
          />
          <Details
            detailsList={EXP_LIST}
            className="border-l-2 border-violet-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
