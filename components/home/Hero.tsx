import React from "react";
import ContactShortcut from "../sharedComponents/ContactShortcut";
const Hero = () => {
  return (
    <div className="text-white max-w-[20rem] medium:max-w-[24rem]">
      <p className="mb-2 text-xl">Hi, I&apos;m Kunle</p>
      <p className="uppercase text-2xl medium:text-3xl mb-8 leading-9">
        A Project manager based in london
      </p>
      <ContactShortcut />
    </div>
  );
};

export default Hero;
