import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, GitHub, Link2 } from "react-feather";

const CONTACT_LIST = [
  {
    name: "Connect on Linkedin",
    icon: <Linkedin className="mr-2" />,
    link: "https://www.linkedin.com/in/wai-phyo-naing/",
  },
  {
    name: "Follow on Twitter",
    icon: <Twitter className="mr-2" />,
    link: "https://twitter.com/waiphyo285",
  },
  {
    name: "Follow on GitHub",
    icon: <GitHub className="mr-2" />,
    link: "https://burma.social/@waiphyo285",
  },
  {
    name: "Follow on Mastodon",
    icon: <Link2 className="mr-2" />,
    link: "https://github.com/waiphyo285",
  },
];

const Contact = ({ ...rest }) => {
  return (
    <section {...rest}>
      {CONTACT_LIST &&
        CONTACT_LIST.map((contact, contactIdx) => (
          <Link
            key={contactIdx}
            href={contact.link}
            className="inline-flex justify-center items-center align-middle m-2 hover:text-violet-500"
          >
            {contact.icon} {contact.name}
          </Link>
        ))}
    </section>
  );
};

export default Contact;
