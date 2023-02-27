import React from "react";
import dynamic from "next/dynamic";
import { User } from "react-feather";

// local components
import Contact from "./Contact";

// remote components
const Title = dynamic(() => import("home/title").catch(console.error), {
  ssr: false,
});
const SubTitle = dynamic(() => import("home/sub-title").catch(console.error), {
  ssr: false,
});
const BreakLine = dynamic(() => import("home/break").catch(console.error), {
  ssr: false,
});

const PARAM_LIST = [
  {
    text: `I am a Software Engineer from Myanmar. I have been working for Global
    New Wave Technology in Yangon for over 3 years. And I also accept the
    occasional freelance project. I am passionate about design, development
    and interaction. Just as I wholly enjoy my job, I'm absolutely
    enthusiastic every day.`,
  },
  {
    text: `I absolutely appreciate front-end technologies like React.js and
    back-end technologies like Node.js, despite the fact that I work in a
    backend position. So I can say with certainty that I'm still jogging. In
    the future, I'd like to work as a Full Stack Developer with a passion
    for product development.`,
  },
];

const Details = (args) => {
  const { detailsList, ...rest } = args;
  return (
    <section {...rest}>
      {detailsList &&
        detailsList.map((detail, detailIdx) => {
          return (
            <p
              key={detailIdx}
              className="indent-10 leading-8 antialiased my-3 hover:subpixel-antialiased"
            >
              {detail.text}
            </p>
          );
        })}
    </section>
  );
};

const Summary = () => {
  return (
    <>
      <Title
        icon={""}
        title="Wai Phyo Naing"
        className="text-4xl font-extrabold"
      />
      <SubTitle
        icon={<User />}
        title="Software Engineer"
        className="inline-flex text-2xl font-extrabold mt-5"
      />
      <Details
        title="Details"
        detailsList={PARAM_LIST}
        className="my-5 text-md lg:text-lg"
      />
      <Contact title="Contacts" className="my-5 text-md lg:text-lg" />
      <div className="my-8">
        <BreakLine />
      </div>
    </>
  );
};

export default Summary;
