"use client";
import React, { useState } from "react";
import logo from "@/public/images/ui/kunle.png";
import { Icons } from "./icons";
import Image from "next/image";
import Link from "next/link";
import { Links } from "@/types";
import { motion, AnimatePresence,Variants } from "framer-motion";

const navLinks: Links[] = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 2,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
];
const sidebarVariants: Variants = {
  closed: {
    x: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1], // Custom "slow-in-out" cubic bezier
      staggerChildren: 0.05,
      staggerDirection: -1, // Links start disappearing from bottom to top
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4, // The links themselves fade out slightly faster than the bar moves
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const NavBar = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<number>(navLinks[0].id);
  function toggleNav() {
    setOpenSideBar((prev) => !prev);
  }
  function closeNav(id: number) {
    setActiveNav(id);
    setOpenSideBar(false);
  }
  return (
    <>
      <div className="bg-white text-black fixed w-full z-99">
        <div className="flex-between-center w-[95%] mx-auto py-2 medium:flex-between-center max-w-275">
          <Image
            alt="myLogo"
            src={logo}
            // placeholder="blur"
            width={60}
            height={40}
          />
          <Icons.menu
            className="cursor-pointer medium:hidden"
            onClick={toggleNav}
          />
          <div className="hidden medium:w-[50%] medium:flex medium:justify-between medium:items-center max-w-100">
            {navLinks.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                onClick={() => closeNav(link.id)}
                className={`font-esteban text-2xl medium:text-lg ${activeNav === link.id ? "text-black" : "text-gray opacity-70 medium:text-[16px]"}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openSideBar && (
          <>
            {/* Backdrop for the "Modal" feel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleNav}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-99 medium:hidden"
            />

            {/* SideBar Container */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              // Responsive width: 100% on small mobile, 70% on tablet (sm breakpoint)
              className="fixed top-0 left-0 z-99 bg-white h-screen w-full tablet:w-[70%] flex flex-col items-center py-3 shadow-2xl medium:hidden"
            >
              <Icons.close
                className="cursor-pointer mb-16 mr-2 text-black self-end"
                onClick={toggleNav}
              />

              {/* Centered Links matching your original layout */}
              <div className="flex flex-col items-center justify-between h-[40vh] mb-20">
                {navLinks.map((link) => (
                  <motion.div key={link.id} variants={linkVariants}>
                    <Link
                      href={link.link}
                      onClick={() => closeNav(link.id)}
                      className={`font-esteban text-2xl ${
                        activeNav === link.id
                          ? "text-black"
                          : "text-gray opacity-70 text-xl"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center w-[90%]">
                <div className="h-px bg-gray/20 mb-8 w-[70%]"></div>
                <p className="mb-2 text-center text-sm px-4">
                  We made honest design and thoughtful experiences in a human
                  dimension
                </p>
                <div className="h-0.5 bg-black mb-10 w-3"></div>
                <p className="text-sm font-semibold text-gray tracking-widest">
                  KUN1E
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
