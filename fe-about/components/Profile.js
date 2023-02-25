import React from "react";
import Image from "next/image";

const imgLoader = ({ src, width, quality }) => {
  // just can load from outside cdn
  return `/authors/me4x3.jpg`;
};

const Profile = () => {
  return (
    <div className="bg-center rotate-6">
      <Image
        width={300}
        height={300}
        alt="My profile"
        loader={imgLoader}
        src="/authors/logo.png"
        className="border-4 border-dashed rounded-lg"
      />
    </div>
  );
};

export default Profile;
