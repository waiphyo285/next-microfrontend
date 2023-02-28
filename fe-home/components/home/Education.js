import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "react-feather";

// local components
import BreakLine from "../shared/Break";
import SubTitle from "../shared/SubTitle";

const EDU_LIST = [
  {
    school: "University of Computer Studies, Meiktila",
    duration: "Dec 2014 - Aug 2019",
    majority: "Computer Science, B.C.Sc",
    portfolio: "http://ucsmtla.edu.mm/",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    school: "No. Basic Education High School, Myingyan",
    duration: "Jun 2011 - Mar 2014",
    majority: "G9, G10, G11 Eduction",
    portfolio: "#",
    responsibility: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
];

const Details = (args) => {
  const { detailsList, ...rest } = args;

  return (
    <ol {...rest}>
      {detailsList &&
        detailsList.map((edu, expIdx) => (
          <li key={expIdx}>
            <div className="flex-start flex items-center">
              <i className="-ml-[5px] h-[9px] w-[9px] rounded-full bg-violet-300" />
              <h4 className="ml-4 text-xl font-semibold text-lg text-violet-500">
                {edu.majority}
              </h4>
            </div>
            <div className="flex ml-5 mt-3">
              <div className="grow">
                <Link
                  href={edu.portfolio || "#"}
                  className="hover:text-purple-500"
                >
                  <h4 className="text-md font-semibold">{edu.school}</h4>
                </Link>
              </div>
              <div className="flex-none w-50">
                <span className="text-sm transition duration-150">
                  {edu.duration}
                </span>
              </div>
            </div>
            <div className="ml-5 mb-4">
              <p className="text-md mt-4 mb-4 pb-2">{edu.responsibility}</p>
              <BreakLine />
            </div>
          </li>
        ))}
    </ol>
  );
};

const Education = () => {
  return (
    <div className="grid grid-flow-row gap-4 md:grid-flow-col">
      <div className="px-8 lg:my-16 lg:px-16">
        <Image
          priority
          width={300}
          height={300}
          alt="Computer student"
          src="/information/male_certificate.svg"
        />
      </div>
      <div className="grid grid-flow-row gap-4 md:grid-flow-col">
        <div className="my-8 px-8 md:px-16">
          <SubTitle
            icon={<BookOpen />}
            title="Educations"
            className="inline-flex text-2xl font-extrabold mb-4"
          />
          <Details
            detailsList={EDU_LIST}
            className="border-l-2 border-violet-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
