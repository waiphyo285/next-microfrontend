import "tailwindcss/tailwind.css";
import React from "react";
import Image from "next/image";

const imgLoader = ({ src, width, quality }) => {
  return `/authors/coffee.jpg`;
};

const Profile = () => {
  return (
    <div className="bg-cover bg-center rotate-6">
      <Image
        width={300}
        height={300}
        alt="My profile"
        loader={imgLoader}
        src="/authors/logo.png"
        className="bg-origin-border border-4 border-dashed rounded-3xl"
      />
    </div>
  );
};

export default Profile;
