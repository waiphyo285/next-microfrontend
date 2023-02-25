import "tailwindcss/tailwind.css";
import React from "react";
import Image from "next/image";

const imgLoader = ({ src, width, quality }) => {
  return `https://picsum.photos/${width}`;
};

const Profile = () => {
  return (
    <div className="bg-cover bg-center rotate-6">
      <Image
        src="me.png"
        alt="My profile"
        width={400}
        height={400}
        loader={imgLoader}
        className="bg-origin-border border-4 border-dashed rounded-3xl"
      />
    </div>
  );
};

export default Profile;
