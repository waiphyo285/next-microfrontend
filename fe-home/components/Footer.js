import React from "react";

const Footer = () => {
  return (
    <footer className="h-10 px-4 sm:px-6 pb-12">
      <div className="text-center text-sm">
        <span className="font-bold mr-2">{`{ DEV }`}</span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
