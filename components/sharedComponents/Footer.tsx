import React from "react";
import { Links } from "@/types";
import { Icons } from "./icons";
import Link from "next/link";
import { getCurrentYear } from "@/lib/utils";
const socials: Links[] = [
  {
    id: 0,
    title: "linkedin",
    link: "google.com",
    icon: Icons.linkedin,
  },
  {
    id: 1,
    title: "twitter",
    link: "https://google.com",
    icon: Icons.twitter,
  },
];

const Socials = () => (
  <div className="flex items-center gap-4">
    {socials.map((social) => {
      const Icon = social.icon;
      //that way react will know it's a custom react component because of the capital I unlike rendering "social.icon", react would treat it like an html tag instead of compt
      return (
        <Link
          key={social.id}
          href={social.link}
          className="social-icon-wrapper text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          {Icon ? <Icon className="size-4" /> : social.title}
        </Link>
      );
    })}
  </div>
);
const Footer = () => {
  return (
    <div className="bg-black text-off-white flex-col-center pt-8 overflow-hidden">
      <div className="flex-col-center mb-8 gap-4">
        <p className="text-sm">Or you can check out my socials</p>
        <Socials />
      </div>
      <div className="flex-col-center gap-2">
        <p className="text-xs opacity-70">
          © {getCurrentYear()} All Rights Reserved.
        </p>
        <p className="font-nunito_sas tracking-[2rem] text-8xl opacity-10 translate-y-[45%]">
          KUN1E
        </p>
      </div>
    </div>
  );
};

export default Footer;
