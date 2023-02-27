import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Phone, Mail, Map, ArrowUpRight } from "react-feather";

const SubTitle = dynamic(() => import("home/sub-title").catch(console.error), {
  ssr: false,
});

const ADDRESS_LIST = [
  {
    name: "phone",
    icon: <Phone size="22" />,
    link: "tel:+959775915615",
    show_text: "+959775915615",
  },
  {
    name: "email",
    icon: <Mail size="22" />,
    link: "mailto:waiphyo.dev@gmail.com",
    show_text: "waihyo.dev@gmail.com",
  },
  {
    name: "map",
    icon: <Map size="22" />,
    link: "#",
    show_text: "No. 19 Ward, Myingyan, Mandalay",
  },
];

const Address = () => {
  return (
    <>
      <SubTitle
        icon={<ArrowUpRight />}
        title="Direct contact via."
        className="inline-flex text-2xl font-extrabold"
      />
      <ul className="mt-8 mb-16 lg:mb-8">
        {ADDRESS_LIST &&
          ADDRESS_LIST.map((addr, addrIdx) => (
            <li
              key={addrIdx}
              className="inline-flex w-full border-b border-violet-300 py-4 hover:text-violet-500"
            >
              <span className="mr-4">{addr.icon}</span>
              <Link href={addr.link}>{addr.show_text}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Address;
