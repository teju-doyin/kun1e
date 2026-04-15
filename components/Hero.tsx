import React from "react";
import heroImage from "@/public/images/ui/hero-image.jpeg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="text-white max-w-[20rem] medium:max-w-[24rem]">
      <p className="mb-2 text-xl">Hi, I&apos;m Kunle</p>
      <p className="uppercase text-2xl medium:text-3xl mb-8 leading-9">
        A Project manager based in london
      </p>
      <div className="flex items-center text-sm">
        <p className="bg-black text-white base-border px-4 py-2">
          Got a project?
        </p>
        <p className="bg-white text-black base-border px-4 py-2">
          Let&apos;s talk.
        </p>
      </div>
    </div>
  );
};

export default Hero;
