"use client"

import React from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "next/font/google";
import "./preloader.css"

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

const Preloader = () => {
  return (
    <div className={`flex justify-center items-center md:h-full h-[50vh] bg-black`}>
      <div className="box2 text-lg font-bold z-30">
        Loading
      </div>
      {/* <motion.div
        className="loader-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-[40%] h-[40%] border-[5rem] border-red-600 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div> */}
    </div>
  );
};

export default Preloader;
