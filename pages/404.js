import React from "react";

const Error404 = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        color: "red",
      }}
    >
      <div className="text-6xl">Error 404!</div>
      <div>Not found !!!</div>
      <div>Go back</div>
    </div>
  );
};

export default Error404;
