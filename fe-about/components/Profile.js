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
        width={280}
        height={280}
        alt="My profile"
        loader={imgLoader}
        src="/authors/logo.png"
        className="my-12 border-4 border-violet-300 rounded-lg"
      />
    </div>
  );
};

export default Profile;
