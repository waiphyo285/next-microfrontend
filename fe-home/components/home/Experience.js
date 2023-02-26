import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase } from "react-feather";

// local components
import BreakLine from "../shared/Break";
import SubTitle from "../shared/SubTitle";

const EXP_LIST = [
  {
    company: "D3-SG Pte Ltd",
    duration: "Sep 2022 - Present",
    position: "Software Engineer",
    portfolio: "http://www.d3-sg.com/",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    company: "Global New Wave Technology",
    duration: "Dec 2019 - Present",
    position: "Backend Developer",
    portfolio: "http://www.newwave-tech.com/",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    company: "Global Connect Asia",
    duration: "Sep 2019 - Nov 2019",
    position: "Jr. Odoo Developer",
    portfolio: "https://www.gca.com.mm/",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    company: "Global Connect Asia",
    duration: "May 2019 - Jul 2019",
    position: "Internship Program",
    portfolio: "https://www.gca.com.mm/",
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
              <i className="-ml-[5px] h-[9px] w-[9px] rounded-full bg-violet-300" />
              <h4 className="ml-4 text-xl font-semibold text-lg text-violet-500">
                {exp.position}
              </h4>
            </div>
            <div className="flex ml-5 mt-3">
              <div className="grow">
                <Link
                  href={exp.portfolio || "#"}
                  className="hover:text-purple-500"
                >
                  <h4 className="text-md font-semibold">{exp.company}</h4>
                </Link>
              </div>
              <div className="flex-none w-50">
                <span className="text-sm transition duration-150">
                  {exp.duration}
                </span>
              </div>
            </div>
            <div className="ml-5 mb-4">
              <p className="text-md mt-4 mb-4 pb-2">{exp.responsibility}</p>
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
            icon={<Briefcase />}
            title="Experiences"
            className="inline-flex text-2xl font-extrabold mb-4"
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
