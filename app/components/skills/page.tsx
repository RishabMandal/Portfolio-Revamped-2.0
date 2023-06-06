"use client";

import React, { useEffect } from "react";
// import languageimage from "./languageimage.jpg";
import projectimage1 from "../../../assets/Picsart_22-08-10_21-49-15-590.png";
import projectimage2 from "../../../assets/projectimage2.jpg";
import projectimage3 from "../../../assets/projectimage3.png";
// From here starts new portion
import ReactImage from "../../../assets/react.png";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";
import Node from "../../../assets/node.png";
import JavaScript from "../../../assets/javascript.png";
import GitHub from "../../../assets/github.png";
import Tailwind from "../../../assets/tailwind.png";
import Image from "next/image";
import Mongo from "../../../assets/mongo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Ubuntu } from "next/font/google";

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export default function Skills() {
  // Vibration, Haptic Feedback while scrolling
  const { ref, inView } = useInView();
  // const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      navigator.vibrate(50);
    }
    if (!inView) {
    }
  }, [inView]);

  return (
    <div className={fontUbuntu.className}>
      <AnimatePresence>
        {/* <section
                  id="Skills"
                  className={`text-gray-600 body-font bg-black text-white`}
                >
                  <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <h2 className="sm:text-4xl font-bold font-Ubuntu mt-10 text-3xl mb-2 md:w-2/5 font-Rampart ">
                      My Soft Skills
                    </h2>
                    <div className="md:w-3/5 mt-10 md:pl-6">
                      <p className="leading-relaxed text-base font-Ubuntu">
                        Web development, Basic android application development
                        through Android Studio, Video editing, Photoshop and
                        photo editing, C, Java, React JS, Node JS, Express JS,
                        MongoDB.
                      </p>
                      <div className="flex md:mt-4 mt-6">
                        <a className="text-red-600 inline-flex items-center cursor-pointer ">
                          <button className="inline-flex font-Ubuntu text-white bg-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:bg-white hover:border-red-700 hover:shadow-xl hover:shadow-red-600/40 border-4 border-red-700 rounded-xl">
                            Read more
                          </button>

                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </section> */}
        {/* New Section  */}
        {/* Photos section start (These are the technologies I know) */}
        <div
          className={`flex ${fontUbuntu.className} flex-col bg-black text-white mt-16 pt-16 items-center text-center`}
        >
          <h1
            className={`title-font sm:text-4xl text-3xl font-bold font-Ubuntu bg-black text-white underline underline-offset-[24px]`}
          >
            My Soft Skills
            <br className="hidden lg:inline-block" />
          </h1>
          <p
            className={`mt-[0.20rem] md:mb-8 lg:mb-8 mb-20 font-Ubuntu leading-relaxed text-red-600 bg-black
             px-2`}
          >
            what i know
          </p>
        </div>
        {/* new start */}{" "}
        <div className={fontUbuntu.className}>
          <div className={`w-full pb-56 bg-black text-white `}>
            <div className="max-w-[1000px] mx-auto py-4 pb-4 flex flex-col justify-center w-full h-full">
              <div>
                <p className="py-4 pl-4 text-red-600">// Technologies I know</p>
              </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="  hover:scale-110 duration-500">
                  <Image
                    className="w-20 mx-auto"
                    src={ReactImage}
                    alt="HTML icon"
                  />
                  <p className="my-4 font-Ubuntu">REACT JS</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <img
                    className="w-20 h-20 object-cover mx-auto"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--TenQsTYv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd3omc5vp71r5k9z69b4.png"
                    alt="HTML icon"
                  />
                  <p className="my-4 font-Ubuntu">NEXT JS</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <img
                    className="w-20 h-20 object-cover mx-auto"
                    src="data:image/jpeg;base64,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"
                    alt="HTML icon"
                  />
                  <p className="my-4 font-Ubuntu">MATERIAL UI</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image
                    className="w-20 mx-auto"
                    src={GitHub}
                    alt="HTML icon"
                  />
                  <p className="my-4 font-Ubuntu">GITHUB</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
                  <p className="my-4 font-Ubuntu">MONGO DB</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image
                    className="w-20 mx-auto"
                    src={Tailwind}
                    alt="HTML icon"
                  />
                  <p className="my-4 font-Ubuntu">TAILWIND</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={Node} alt="HTML icon" />
                  <p className="my-4 font-Ubuntu">NODE JS</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image
                    className="w-20 mx-auto"
                    src={JavaScript}
                    alt="HTML icon"
                  />
                  <p className="my-4 font-Ubuntu">JAVASCRIPT</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                  <p className="my-4 font-Ubuntu">HTML</p>
                </div>
                <div className="  hover:scale-110 duration-500">
                  <Image className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                  <p className="my-4 font-Ubuntu">CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // */}
        <div
          className={`flex flex-col bg-black text-white items-center text-center`}
        >
          <h1
            className={`title-font sm:text-4xl text-3xl font-bold font-Ubuntu bg-black text-white underline underline-offset-[24px]`}
          >
            Projects
            <br className="hidden lg:inline-block" />
          </h1>
          <p
            className={`mt-[0.20rem] md:mb-8 lg:mb-8 mb-20 font-Ubuntu leading-relaxed text-red-600 bg-black
             px-2`}
          >
            my work
          </p>
        </div>
        {/* 1st project  */}
        <motion.section
          className={`bg-black text-white body-font font-Rampart `}
        >
          <motion.div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{
                x: "-100%",
                opacity: 0,
                transition: { duration: 0, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              ref={ref}
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            >
              <Image
                onClick={() => {
                  window.location.href =
                    "https://rishabmandal.github.io/Login-Page/";
                }}
                className="object-cover object-center rounded-xl cursor-pointer"
                alt="hero"
                src={projectimage1}
              />
            </motion.div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{
                x: "100%",
                opacity: 0,
                transition: { duration: 0, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                Login and Register Page
              </h1>
              <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                Technologies used: HTML, CSS & Javascript, React JS.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* 2nd project  */}
        <motion.section
          className={`text-gray-600 bg-black text-white body-font font-Rampart `}
        >
          <motion.div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{
                x: "-100%",
                opacity: 0,
                transition: { duration: 0, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              ref={ref}
              // className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
              className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              {/* <Image
                        onClick={() => {
                          window.location.href =
                            "https://rishabmandal.github.io/Login-Page/";
                        }}
                        className="object-cover object-center rounded-xl cursor-pointer"
                        alt="hero"
                        src={projectimage2}
                      /> */}
              <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                Personal Password Manager
              </h1>
              {/* <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Made with React JS, Tailwind CSS & Framer Motion.
                      </p> */}
              <p className="mb-2 mt-6 mr-2 leading-relaxed font-Ubuntu">
                PersonalPass is a password manager that helps users securely
                store and manage their login credentials for various online
                accounts. It helps users manage their account security by
                providing alerts for potential security issues and offering
                suggestions for creating stronger passwords.
              </p>
              <p className="mb-8 mt-2 mr-2 leading-relaxed font-Ubuntu">
                Technologies used : JavaScript, Tailwind CSS, React JS, Framer
                Motion, Firebase
              </p>
            </motion.div>
            <motion.div
              // ref={ref2}
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{
                x: "100%",
                opacity: 0,
                transition: { duration: 0, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut",
              }}
              // className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            >
              {/* <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                        Personal Password Manager
                      </h1>
                      <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Made with React JS, Tailwind CSS & Framer Motion.
                      </p> */}
              <Image
                onClick={() => {
                  window.location.href =
                    "https://rishabmandal.github.io/Personal-Password-Manager/#";
                }}
                className="object-cover object-center rounded-xl cursor-pointer"
                alt="hero"
                src={projectimage2}
              />
            </motion.div>
          </motion.div>
        </motion.section>
        {/* 3rd project  */}
        <motion.section
          className={`bg-black text-white body-font font-Rampart `}
        >
          <motion.div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{
                x: "-100%",
                opacity: 0,
                transition: { duration: 0, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              ref={ref}
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            >
              <Image
                onClick={() => {
                  window.location.href =
                    "https://rishabmandal.github.io/Hangman-Game/";
                }}
                className="object-cover object-center rounded-xl cursor-pointer"
                alt="hero"
                src={projectimage3}
              />
            </motion.div>
            <motion.div
              // ref={ref2}
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{
                x: "100%",
                opacity: 0,
                transition: { duration: 0, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <h1 className="font-Ubuntu sm:text-4xl text-3xl mb-4 text-red-600">
                Hangman Game
              </h1>
              {/* <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                        Made with React JS & Tailwind CSS.
                      </p> */}
              <p className="mb-4 mt-2 leading-relaxed font-Ubuntu">
                Designed a word game in which player has to guess a word that
                the other player has thought of, by guessing the letters in it.
                Every time they guess a wrong letter, part of a picture of a
                person being hanged is drawn, and if the picture is completed
                the person guessing has lost.
              </p>
              <p className="mb-8 mt-2 leading-relaxed font-Ubuntu">
                Technologies used : JavaScript, Tailwind CSS, React JS
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* End of photos section */}
      </AnimatePresence>
    </div>
  );
}
