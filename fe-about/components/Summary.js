import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { User, Linkedin, Twitter, GitHub, Link2 } from "react-feather";

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
    icon: <Link2 className="mr-2" />,
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

const Contact = (args) => {
  const { contactList, ...rest } = args;
  return (
    <section {...rest}>
      {contactList &&
        contactList.map((contact, contactIdx) => (
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
      <div className="mt-8">
        <BreakLine />
      </div>
      <Contact
        title="Contacts"
        contactList={CONTACT_LIST}
        className="my-5 text-md lg:text-lg"
      />
    </>
  );
};

export default Summary;
