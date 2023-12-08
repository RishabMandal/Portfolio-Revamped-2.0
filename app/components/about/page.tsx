"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import downloadimage from "../../../assets/download.png";
import Red_Coding from "../../../assets/Red_Coding.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { Ubuntu } from "next/font/google";

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export default function About() {
  // Vibration, Haptic Feedback while scrolling
  const { ref, inView } = useInView();
  // const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      navigator.vibrate(50);
      // animation.start({
      //   x: 0,
      //   transition: { type: "spring" },
      // });
    }
    if (!inView) {
      // animation.start({
      //   x: "-100vw",
      //   transition: { type: "spring" },
      // });
    }
  }, [inView]);

  return (
    <div className={`${fontUbuntu.className} overflow-x-hidden`}>
      {/* return ( */}
      {/* <> */}
      {/* The bigger laptop screen part */}
      {/* // */}
      <section
        id="aboutmyself"
        className={`bg-black text-white pt-20 body-font hidden md:block lg:block font-Rampart`}
      >
        {/* <div className="text-center m-10">
                <h1 className="title-font sm:text-4xl text-3xl mb-1 font-bold text-black underline underline-offset-[24px]">
               About myself
               <br className="hidden lg:inline-block" />
               </h1>
               <p className="mb-8 leading-relaxed text-red-600 bg-white px-2">
                who i am
                 </p>
                  </div> */}
        <div
          className={`container bg-black text-white mx-auto flex px-5 py-24 md:flex-row flex-col items-center`}
        >
          <motion.div
            initial={{ x: "-100vw" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            animate={{ x: 0 }}
            className="lg:flex-grow md:w-1/2 -mt-14 lg:pr-10 md:pr-8 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <hr />
            <h1
              className={`title-font sm:text-4xl text-3xl mb-1 font-bold font-Ubuntu bg-black text-white underline underline-offset-[24px]`}
            >
              About myself
              <br className="hidden lg:inline-block" />
            </h1>
            <p
              className={`mb-8 font-Ubuntu leading-relaxed text-red-600 bg-black px-2`}
            >
              who i am
            </p>
            <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
              Rishab Mandal, that's me. Born in India, I am a MERN-Stack Web
              Developer creating websites for people who know that prioritizing
              projects leads to profits.
            </p>
            <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
              Because when you show up as your full self, you create space for
              your clients to do the same. And then everybody wins.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigator.vibrate(50);
                  window.location.href =
                    "https://drive.google.com/file/d/111ITsTbq5Lo0_RaAlx-ZBMZMwSI8KJgt/view?usp=drivesdk";
                }}
                className={`inline-flex hover:bg-black font-Ubuntu text-white transition ease-in hover:shadow-xl hover:shadow-red-600/40 bg-red-700 animate-bouncy hover:animate-none border-4 border-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:border-red-600 hover:rounded-xl rounded-xl`}
              >
                Download CV
              </button>
              <Image
                onClick={() => {
                  navigator.vibrate(50);
                  window.location.href =
                    "https://drive.google.com/file/d/111ITsTbq5Lo0_RaAlx-ZBMZMwSI8KJgt/view?usp=drivesdk";
                }}
                src={downloadimage}
                alt=""
                className="w-8 h-8 my-auto mx-2 cursor-pointer hover:scale-125 duration-200"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              type: "spring",
              bounce: 0.3,
            }}
            animate={{ x: 0 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-[-150px]"
          >
            {/* My try for cube animation  */}
            {/* <div> */}
            {/* <Canvas>
                  <ambientLight intensity={0.7} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                  />
                  <pointLight position={[-10, -10, -10]} />
                  <Box position={[0, 0, 0]} />
                </Canvas> */}
            <Image src={Red_Coding} alt="Image" className="rounded-xl mt-12" />
            {/* </div> */}
          </motion.div>
        </div>
      </section>
      {/* The smaller mobile screen part */}
      {/* // */}
      {/* // */}
      <section
        id="aboutmyself"
        className={`bg-black scale-[85%] md:scale-100 text-white md:hidden lg:hidden body-font font-Rampart`}
      >
        <div
          className={`container bg-black text-white mx-auto flex px-5 pb-24 md:flex-row flex-col items-center`}
        >
          <motion.div
            initial={{ x: "-100vw" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            animate={{ x: 0 }}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <hr />
            <h1
              className={`title-font sm:text-4xl text-3xl mb-1 font-bold font-Ubuntu bg-black text-white underline underline-offset-[24px]`}
            >
              About myself
              <br className="hidden lg:inline-block" />
            </h1>
            <p
              className={`mb-8 font-Ubuntu leading-relaxed text-red-600 bg-black
                 px-2`}
            >
              who i am
            </p>
            {/* <p className="mb-8 leading-relaxed">
                      Rishab Mandal, that's me. Born in Mumbai, I am a
                      Full-Stack Web developer and a UI/UX designer.
                    </p> */}
            <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
              Rishab Mandal, that's me. Born in India, I am a Full-Stack Web
              Developer creating websites for people who know that prioritizing
              projects leads to profits.
            </p>
            <p className="mb-8 leading-relaxed text-lg font-Ubuntu">
              Because when you show up as your full self, you create space for
              your clients to do the same. And then everybody wins.
            </p>
            <div className="flex justify-center">
              <button
                className={`inline-flex hover:bg-black font-Ubuntu text-white hover:shadow-xl hover:shadow-red-600/40 bg-red-700 animate-bouncy hover:animate-none border-4 border-red-700 py-2 px-6 focus:outline-none hover:text-red-600 hover:border-4 hover:border-red-600 hover:rounded-xl rounded-xl`}
                onClick={() => {
                  navigator.vibrate(50);
                  window.location.href =
                    "https://docs.google.com/document/d/1qNDTlxYtQuw0PsfeU8DkbsWUBK5F3NyPYtkNP62o-6s/edit";
                }}
              >
                Download CV
              </button>
              <Image
                onClick={() => {
                  navigator.vibrate(50);
                  window.location.href =
                    "https://docs.google.com/document/d/1qNDTlxYtQuw0PsfeU8DkbsWUBK5F3NyPYtkNP62o-6s/edit";
                }}
                src={downloadimage}
                alt=""
                className="w-8 h-8 my-auto cursor-pointer mx-2"
              />
            </div>
          </motion.div>
          <motion.div
            // initial={{ x: "100vw" }}
            // transition={{ duration: 0.7,delay:1 }}
            // animate={{ x: 0,zIndex:0 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <div
              onClick={() => {
                navigator.vibrate([
                  100, 50, 100, 75, 100, 100, 100, 150, 100, 200, 100,
                ]);
              }}
            >
              <Image
                src={Red_Coding}
                alt="Image"
                className="rounded-xl mt-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUALIFICATION  */}
      <AnimatePresence>
        <div className={`bg-black text-white overflow-x-hidden`}>
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
            className={`bg-black container scale-75 md:scale-100 mx-auto text-white md:w-screen text-center px-5 py-24 items-center`}
          >
            <h1
              ref={ref}
              className={`title-font md:text-4xl text-2xl my-10 mx-auto font-bold font-Ubuntu bg-black text-white`}
            >
              Qualification
              <br className="hidden lg:inline-block" />
            </h1>
            <div className="inline-block mx-auto text-left">
              <div className="flex my-8 md:text-lg">
                <div className="bg-red-600 rounded-full px-3 py-1 h-fit font-semibold">
                  3
                </div>
                <div className=" text-red-600 mx-4 hover:scale-110 transition ease-in">
                  BE in Computer Engineering
                  <p>Thadomal Shahani Engineering College</p>
                </div>
              </div>
              <div className="flex my-8 md:text-lg">
                <div className="bg-red-600 rounded-full px-3 py-1 h-fit font-semibold">
                  2
                </div>
                <div className=" text-red-600 mx-4 hover:scale-110 transition ease-in">
                  HSC <p>Swami Vivekanand Junior College</p>
                </div>
              </div>
              <div className="flex my-8 md:text-lg">
                <div className="bg-red-600 rounded-full px-3 py-1 h-fit font-semibold">
                  1
                </div>
                <div className=" text-red-600 mx-4 hover:scale-110 transition ease-in">
                  SSC <p>St. Sebastian's High School</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
      {/* </> */}
      {/* ); */}
    </div>
  );
}
