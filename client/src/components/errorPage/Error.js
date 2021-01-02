import React from "react";
import error from "./illustrations/error.svg";
export default function componentName() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p />
        <img src={error} alt="error" />
        <p style={{ color: "#fff", fontFamily: "Roboto" }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
    </>
  );
}
