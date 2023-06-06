"use client";

import { createContext, useState, useEffect } from "react";
// import "./App.css";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import { Ubuntu } from "next/font/google";

const fontUbuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

function App() {
  useEffect(() => {
    // COPY TEXT IS TURNED OFF THROUGH index.html

    // PREVENTING RIGHT CLICK MENU

    window.addEventListener(
      "contextmenu",
      (e) => {
        alert(
          "** ** Right click is disabled ** **\n\nAny attempt made to enable it without the direct consent of RISHAB MANDAL may result in LEGAL ACTION against YOU."
        );
        e.preventDefault();
      },
      false
    );

    // PREVENTING F12 / INSPECT MENU

    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        alert(
          "** ** LEGAL NOTICE ** ** \nAll site content, including files, images, video, animations, transitions and written content are the property of RISHAB MANDAL.\n\n Any attempts to mimic said content, or use it as your own without the direct consent of RISHAB MANDAL may result in LEGAL ACTION against YOU.\n\nPlease exit this area immediately.          "
        );
        return false;
      }
      if (e.keyCode == 44) {
        alert(
          "** ** Taking Screenshot is NOT allowed ** ** \n\nAll site content, including files, images, video, animations, transitions and written content are the property of RISHAB MANDAL.\n\n Any attempts to mimic said content, or use it as your own without the direct consent of RISHAB MANDAL may result in LEGAL ACTION against YOU.\n\nPlease exit this area immediately.          "
        );
        return false;
      }
    };
  }, []);

  const [loadingscreen, setLoadingscreen] = useState("h-[100vh]");
  const [contentscreen, setContentscreen] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setLoadingscreen("hidden");
      setContentscreen("");
    }, 1700);
    // }, 85700);
  }, []);

  return (
    <>
      <div
        className={`${loadingscreen} ${fontUbuntu.className} justify-center py-20 h-screen min-w-screen bg-black`}
      >
        <div className="text-white z-10 text-lg font-bold fixed top-[47%] left-[47%]">
          {/* <div className="text-white z-10 text-lg font-bold inline-block my-auto mx-auto"> */}
          Loading...
        </div>
        <Preloader />
      </div>
      <div className={`${contentscreen}`}>
        <Home />
      </div>
    </>
  );
}

export default App;
