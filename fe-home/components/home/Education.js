import React from "react";
import Image from "next/image";

// local components
import BreakLine from "../common/Break";
import SubTitle from "../common/SubTitle";

const EDU_LIST = [
  {
    school: "University of Computer Studies, Meiktila",
    duration: "Dec 2014 - Aug 2019",
    majority: "Computer Science, B.C.Sc",
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
              <span className="-ml-[5px] h-[9px] w-[9px] rounded-full bg-violet-300"></span>
              <h4 className="ml-4 text-xl font-semibold text-lg text-violet-500">
                {edu.majority}, {edu.school}
              </h4>
            </div>
            <div className="ml-5 mb-4">
              <span className="text-sm transition duration-150 ease-in-out">
                {edu.duration}
              </span>
              <div className="mt-4 mb-4 pb-2 text-md">{edu.responsibility}</div>
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
            title="Educations"
            className="text-2xl font-extrabold mb-4"
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
