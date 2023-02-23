import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Navbar = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-emerald-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2>Kangu</h2>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-emerald-200 border-emerald-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-emerald-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-emerald-200 hover:text-white mr-4"
          >
            About
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
