import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const SubTitle = dynamic(() => import("home/sub-title").catch(console.error), {
  ssr: false,
});

const Tags = (args) => {
  const { tagsList, ...rest } = args;
  return (
    <div {...rest}>
      {tagsList &&
        tagsList.map((tag, tagIdx) => (
          <span
            key={tagIdx}
            data-te-chip-init
            data-te-ripple-init
            data-te-close="true"
            className="[word-wrap: break-word] flex items-center justify-between cursor-pointer rounded-[16px] my-[5px] px-[12px] text-black bg-gray-300"
          >
            {tag}
          </span>
        ))}
    </div>
  );
};

const Card = (args) => {
  const { details, ...rest } = args;
  return (
    <Link href="#" {...rest}>
      <div className="relative pb-48 overflow-hidden">
        <img
          alt=""
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
      </div>
      <div className="p-8">
        <Tags
          tagsList={["C++", "Java", "C#", "PHP"]}
          className="flex w-full flex-wrap justify-center text-sm"
        />
        <SubTitle
          icon=""
          title="How to learn not to be noob"
          className="text-lg font-extrabold my-2"
        />
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold">by</span>
          <span className="text-md font-semibold">Admin</span>
          <span className="text-sm font-semibold">- Feb 28, 2023</span>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  return (
    <div className="grid grid-flow-row gap-4 md:grid-flow-col">
      <div className="px-8 my-16">
        <Image
          priority
          width={300}
          height={300}
          alt="Blog photo"
          src="/information/publish_article.svg"
        />
      </div>
      <div className="grid grid-flow-row gap-8 px-8 my-16 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((blog, blogIdx) => (
          <Card
            key={blogIdx}
            details={blog}
            className="block shadow-md rounded-md overflow-hidden border-4 border-violet-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
