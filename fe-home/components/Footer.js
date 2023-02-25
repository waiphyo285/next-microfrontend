import React from "react";

const Footer = () => {
  return (
    <section className="h-10 px-4 sm:px-6 pb-12">
      <div className="text-center text-sm">
        <span className="font-bold mr-2"></span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
