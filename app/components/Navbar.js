"use client";

import React, { useEffect, useState } from "react";
// import moon3 from "../../assets/moon3.png";
import cross from "../../assets/cross.png";
import menuicon from "../../assets/icons-circled-menu.png";
import RM from "../../assets/RM.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [hide, setHide] = useState("hidden");
  const router = useRouter();
  // const currentRoute = router.pathname;
  const [currentRoute, setCurrentRoute] = useState(router.pathname);

  useEffect(() => {
    console.log(currentRoute);
  }, [currentRoute]);

  return (
    <>
      <motion.header
        className={`bg-black ${fontUbuntu.className} text-white z-10 fixed top-0 w-screen body-font hidden md:block lg:block`}
      >
        <div className="container mx-auto font-Ubuntu flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/components/home">
            <div className="flex title-font font-medium items-center mb-4 md:mb-0">
              <motion.span
                whileHover={{ scale: 1.3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="ml-[-15px] font-bold text-xl text-red-700"
              >
                <Image src={RM} alt="" />
              </motion.span>
            </div>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              // activeClassName="mr-5 hover:text-red-700 cursor-pointer text-red-600"
              className={
                currentRoute === "/components/home"
                  ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                  : "mr-5 hover:text-red-700 cursor-pointer "
              }
              // activeStyle={{ color: "red" }}
              href="/components/home"
            >
              Home
            </Link>
            <Link
              className={
                currentRoute === "/components/about"
                  ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                  : "mr-5 hover:text-red-700 cursor-pointer "
              }
              href="/components/about"
            >
              About
            </Link>
            <Link
              className={
                currentRoute === "/components/skills"
                  ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                  : "mr-5 hover:text-red-700 cursor-pointer "
              }
              href="/components/skills"
            >
              Skills
            </Link>
            <Link
              className={
                currentRoute === "/components/contact"
                  ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                  : "mr-5 hover:text-red-700 cursor-pointer "
              }
              href="/components/contact"
            >
              Contact me
            </Link>
          </nav>
          <motion.button className="inline-flex items-center px-3 focus:outline-none rounded text-base md:mt-0">
            {/* Dark Mode */}

            {/* <motion.Image
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src={moon3}
                        alt=""
                        className="w-6"
                        onClick={() => {
                          navigator.vibrate(50);
                          if (dark.Darkval === "bg-white text-black") {
                            dark.setdarkval("bg-black text-white");
                          } else {
                            dark.setdarkval("bg-white text-black");
                          }
                        }}
                      /> */}
          </motion.button>
        </div>
      </motion.header>

      {/* Smaller navbar upper part */}

      <div
        className={`md:hidden bg-black text-white fixed z-10 bg-opacity-0 bottom-3 w-screen lg:hidden text-left text-2xl pt-4`}
      >
        <div
          className={`bg-black text-white ${
            hide === "hidden" ? "" : "hidden"
          } items-right justify-center font-Ubuntu border-4 border-red-700 font-bold pb-2 rounded-xl mx-3 pl-3 text-left text-2xl pt-2`}
        >
          Rishab
          <button className="inline-flex float-right mx-3 my-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
            {/* Dark Mode */}
            <Image
              src={menuicon}
              alt=""
              className="w-6"
              onClick={() => {
                navigator.vibrate(50);
                if (hide === "hidden") {
                  setHide("");
                  // setHide2("hidden");
                } else {
                  setHide("hidden");
                }
              }}
            />
          </button>
          <button className="inline-flex float-right mx-3 my-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
            {/* Dark Mode */}
            {/* <Image
                        src={moon3}
                        alt=""
                        className={`w-6 bg-black text-white`}
                        onClick={() => {
                          navigator.vibrate(50);
                          if (dark.Darkval === "bg-white text-black") {
                            dark.setdarkval("bg-black text-white");
                          } else {
                            dark.setdarkval("bg-white text-black");
                          }
                        }}
                      /> */}
          </button>
        </div>

        {/*                  New Navbar at the bottom (lower part) */}

        <div
          className={`md:hidden bg-black text-white ${hide} bg-opacity-0 fixed bottom-3 w-screen lg:hidden text-left text-2xl pt-4`}
        >
          {/* New Navbar at the bottom  */}
          <div
            className={`border-4 border-red-700 bg-black text-white rounded-xl mx-3`}
          >
            <nav className="md:ml-auto font-Ubuntu flex flex-wrap items-center py-3 text-xl justify-center">
              <Link
                className={
                  currentRoute === "/components/home"
                    ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                    : "mr-5 hover:text-red-700 cursor-pointer "
                }
                href="/components/home"
              >
                Home
              </Link>
              <Link
                className={
                  currentRoute === "/components/about"
                    ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                    : "mr-5 hover:text-red-700 cursor-pointer "
                }
                href="/components/about"
              >
                About
              </Link>
              <Link
                className={
                  currentRoute === "/components/skills"
                    ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                    : "mr-5 hover:text-red-700 cursor-pointer "
                }
                href="/components/skills"
              >
                Skills
              </Link>
              <Link
                className={
                  currentRoute === "/components/contact"
                    ? "mr-5 hover:text-red-700 cursor-pointer text-red-600"
                    : "mr-5 hover:text-red-700 cursor-pointer "
                }
                href="/components/contact"
              >
                Contact me
              </Link>
              <button className="inline-flex float-right mx-3 my-1 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
                {/* Dark Mode */}
                <Image
                  src={cross}
                  alt=""
                  className="w-6"
                  onClick={() => {
                    navigator.vibrate(50);
                    setHide("hidden");
                  }}
                />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
