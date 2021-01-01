import React from "react";
import sprinter from "./illustrations/sprinter.svg";
export default function componentName() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "500px",
        }}
      >
        <p style={{ color: "#fff", fontFamily: "Audiowide", fontSize: "25px" }}>
          Paste a link and click "Shorten" to get started
        </p>
        <img
          src={sprinter}
          alt="sprinter"
          style={{ height: "60%", width: "100%" }}
        />
      </div>
    </>
  );
}
