import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "-8px",
      }}
    >
      <div
        className="text-6xl"
        style={{ fontSize: "4rem", fontWeight: "bold" }}
      >
        Error 404!
      </div>
      <div style={{ fontSize: "3rem", fontWeight: "bold", margin: "1rem" }}>
        Not found !!!
      </div>
      <Link href="/components/home" style={{ color: "red" }}>
        Go back
      </Link>
    </div>
  );
};

export default Error404;
