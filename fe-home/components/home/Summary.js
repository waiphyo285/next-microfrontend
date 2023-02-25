import React from "react";
import Image from "next/image";

const Greeting = ({ title, params }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-2xl font-extrabold text-center md:text-left">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
          {title || "Wai Phyo Naing"}
        </span>
      </h4>
      <p className="my-3 text-md lg:text-lg">
        {params ||
          `Debugging is twice as hard as writing the code in the first
        place. Therefore, if you write the code as cleverly as possible, you are,
        by definition, not smart enough to debug it. - Rajanand`}
      </p>
    </div>
  );
};

const Summary = () => {
  return (
    <div className="flex items-center justify-center p-6 sm:p-12">
      <div className=" flex flex-col space-y-4 md:w-4/6 md:space-y-0 md:space-x-6 md:flex-row">
        <Image
          width={150}
          height={150}
          alt="My profile"
          src="/authors/me1x1.jpg"
          className="self-center flex-shrink-0 border-4 rounded-full md:justify-self-start"
        />
        <Greeting title="" params="" />
      </div>
    </div>
  );
};

export default Summary;
