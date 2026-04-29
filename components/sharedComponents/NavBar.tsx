"use client";
import React, { useState } from "react";
import logo from "@/public/images/ui/kunle.png";
import { Icons } from "./icons";
import Image from "next/image";
import Link from "next/link";
import { Links } from "@/types";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks: Links[] = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "Projects", link: "/projects" },
  { id: 2, title: "Gallery", link: "/gallery" },
  { id: 3, title: "Contact", link: "/contact" },
];

const sidebarVariants: Variants = {
  closed: {
    x: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
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
    transition: { duration: 0.4 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const NavBar = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const pathname = usePathname();

  // derive active link from current URL
  function isActive(link: string) {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  }

  function toggleNav() {
    setOpenSideBar((prev) => !prev);
  }

  function closeNav() {
    setOpenSideBar(false);
  }

  return (
    <>
      <div className="bg-white text-black fixed w-full z-99">
        <div className="flex-between-center w-[95%] mx-auto py-4">
          <Image alt="myLogo" src={logo} width={60} height={40} />

          {/* menu button — wrapped in button for reliable click handling */}
          <button
            className="cursor-pointer md:hidden"
            onClick={toggleNav}
            aria-label="Open menu"
          >
            <Icons.menu className="size-8" />
          </button>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-8 medium:w-[50%] medium:justify-between max-w-100">
            {navLinks.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                onClick={closeNav}
                className={`font-esteban medium:text-xl transition-opacity ${
                  isActive(link.link)
                    ? "text-black"
                    : "text-gray opacity-70 medium:text-[18px]"
                }`}
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
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleNav}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-99 md:hidden"
            />

            {/* sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 z-99 bg-white h-screen w-full tablet:w-[70%] flex flex-col items-center py-3 shadow-2xl md:hidden"
            >
              <button
                className="cursor-pointer mb-16 mr-2 text-black self-end"
                onClick={toggleNav}
                aria-label="Close menu"
              >
                <Icons.close />
              </button>

              <div className="flex flex-col items-center justify-between h-[40vh] mb-20">
                {navLinks.map((link) => (
                  <motion.div key={link.id} variants={linkVariants}>
                    <Link
                      href={link.link}
                      onClick={closeNav}
                      className={`font-esteban text-2xl transition-opacity ${
                        isActive(link.link)
                          ? "text-black font-semibold"
                          : "text-gray opacity-70 text-xl"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center w-[90%]">
                <div className="h-px bg-gray/20 mb-8 w-[70%]" />
                <p className="mb-2 text-center text-sm px-4">
                  We made honest design and thoughtful experiences in a human
                  dimension
                </p>
                <div className="h-0.5 bg-black mb-10 w-3" />
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
