import "tailwindcss/tailwind.css";
import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, GitHub, Link as LinkIcon } from "react-feather";

// local components
import BreakLine from "./common/Break";

const CONTACT_LIST = [
  {
    link: "https://www.linkedin.com/in/wai-phyo-naing/",
    name: "Connect on Linkedin",
    icon: <Linkedin className="mr-2" />,
  },
  {
    link: "https://twitter.com/waiphyo285",
    name: "Follow on Twitter",
    icon: <Twitter className="mr-2" />,
  },
  {
    link: "https://burma.social/@waiphyo285",
    name: "Follow on GitHub",
    icon: <GitHub className="mr-2" />,
  },
  {
    link: "https://github.com/waiphyo285",
    name: "Follow on Mastodon",
    icon: <LinkIcon className="mr-2" />,
  },
];

const Title = () => {
  return (
    <h1 className="text-4xl font-extrabold">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
        Wai Phyo Naing
      </span>
    </h1>
  );
};

const SubTitle = () => {
  return (
    <h2 className="text-2xl font-extrabold mt-5">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
        Software Engineer
      </span>
    </h2>
  );
};

const Details = () => {
  return (
    <section className="my-5 text-md lg:text-lg">
      <p className="indent-10 leading-8 antialiased my-3 hover:subpixel-antialiased">
        I am a Backend Developer from Myanmar. I have been working for Global
        New Wave Technology in Yangon for over 3 years. And I also accept the
        occasional freelance project. I am passionate about design, development
        and interaction. Just as I wholly enjoy my job, I'm absolutely
        enthusiastic every day.
      </p>
      <p className="indent-10 leading-8 antialiased my-3 hover:subpixel-antialiased">
        I absolutely appreciate front-end technologies like React.js and
        back-end technologies like Node.js, despite the fact that I work in a
        backend position. So I can say with certainty that I'm still jogging. In
        the future, I'd like to work as a Full Stack Developer with a passion
        for product development.
      </p>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="my-5">
      {CONTACT_LIST &&
        CONTACT_LIST.map((contact, contactIdx) => (
          <Link
            key={contactIdx}
            href={contact.link}
            className="inline-flex justify-center items-center align-middle m-2"
          >
            {contact.icon} {contact.name}
          </Link>
        ))}
    </section>
  );
};

const Summary = () => {
  return (
    <>
      <Title />
      <SubTitle />
      <Details />
      <BreakLine />
      <Contact />
    </>
  );
};

export default Summary;
