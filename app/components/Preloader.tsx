import React from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "next/font/google";

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

const Preloader = () => {
  return (
    <div className={`flex justify-center items-center h-full bg-black`}>
      <motion.div
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
      </motion.div>
    </div>
  );
};

export default Preloader;
