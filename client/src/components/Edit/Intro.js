import React from "react";
import empty from "./illustrations/empty.svg";
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
          You have no links yet
        </p>
        <img src={empty} alt="empty" style={{ height: "60%", width: "100%" }} />
      </div>
    </>
  );
}
