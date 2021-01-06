import React from "react";

import about from "./illustrations/about.svg";
import "../style.css";
export default function componentName() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-div">
          <p
            style={{ fontFamily: "Audiowide", color: "grey", fontSize: "24px" }}
          >
            About US
          </p>{" "}
          <img src={about} alt="about" style={{ width: "100%" }} />
          <p
            style={{
              fontFamily: "Poppins",
              color: "#696969",
              fontSize: "18px",
            }}
          >
            Lincut is a link shortener with a difference, we offer out of the
            box analytics, you can monitor number of clicks, edit links, delete
            a link and so on. Lincut is committed to guaranteeing your
            connections are protected and dependable. Each connection you make
            utilizing Lincut is encoded with HTTPS to augment security against
            snoopping or altering by outsiders, keeping your substance protected
            from the miscreants.
          </p>
        </div>
      </div>
    </>
  );
}
