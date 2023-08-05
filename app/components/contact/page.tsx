"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ubuntu } from "next/font/google";
import axios from "axios";

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export default function Contact() {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/components/contact")
      .then((res) => console.log(res.data));
  }, []);

  function Submit() {
    if (
      window.confirm("Are you sure you want to send") &&
      name &&
      email &&
      message
    )
      axios
        .post("http://localhost:5000/components/contact", {
          name: name,
          email: email,
          message: message,
        })
        .then((response) => alert(response.data))
        .catch((error) => console.error(error));
  }

  return (
    <section
      id="contactme"
      className={`bg-black overflow-x-hidden text-white ${fontUbuntu.className} body-font`}
    >
      <div className="container scale-[85%] md:scale-100 mx-auto md:h-[70vh] flex px-5 py-5 md:py-24 lg:py-24 md:flex-row flex-col items-center">
        <motion.div
          initial={{ x: "-100vw" }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.3,
          }}
          animate={{ x: 0, position: "" }}
          className="lg:flex-grow mt-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font font-Ubuntu sm:text-4xl text-3xl mb-1 font-bold underline underline-offset-[24px]">
            Contact me
            <br className="hidden lg:inline-block" />
          </h1>
          <p
            className={`mb-8 leading-relaxed font-Ubuntu text-red-600 bg-black
             px-2 sm:ml-[2.75rem]`}
          >
            get in touch
          </p>
          <p className="mb-4 mt-2 leading-relaxed font-Ubuntu text-lg">
            Wow Still here ?! Let's Collab ...
          </p>
          <h1 className="title-font sm:text-xl text-xl mb-4 flex flex-wrap font-medium">
            Feel free to send an email on
            <div className="lg:ml-2  text-red-700">rishab829@gmail.com</div>
          </h1>
        </motion.div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <form method="POST"> */}
          <motion.div
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              type: "spring",
              bounce: 0.3,
            }}
            animate={{ x: 0 }}
            className="lg:w-[100%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          >
            <h2 className="text-gray-900 text-lg font-bold text-center font-Ubuntu title-font mb-5">
              Message me
            </h2>
            <div className="mb-4">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                // id="full-name"
                // name="name"
                placeholder="Name"
                className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                // id="email"
                // name="email"
                placeholder="Email"
                className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                onChange={(e) => setmessage(e.target.value)}
                // id="text2"
                // name="message"
                placeholder="Message.."
                className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 mb-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              // type="submit"
              // id="Sendmessage"
              onClick={Submit}
              className="text-white transition ease-in bg-red-700 border-4 border-red-600 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-600 hover:rounded-xl font-Ubuntu rounded-xl"
            >
              Send message
            </button>
          </motion.div>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
}
