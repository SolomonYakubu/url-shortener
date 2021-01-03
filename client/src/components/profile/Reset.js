import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Reset(props) {
  return (
    <>
      <form
        className="register-form"
        style={{}}
        onSubmit={props.resetPassword.bind(this)}
      >
        <div className="register-form-div">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            size="lg"
            style={{ alignSelf: "flex-end", color: "#007fff" }}
            onClick={props.onHide}
          />
          <p
            style={{ color: "grey", fontFamily: "Audiowide", fontSize: "18px" }}
          >
            Reset Password
          </p>
          <input
            type="password"
            className="input"
            placeholder="Old Password"
            required
            value={props.oldPassword}
            onChange={(e) => props.onOldPasswordSet(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="New Password"
            required
            value={props.newPassword}
            onChange={(e) => props.onNewPasswordSet(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Repeat New Password"
            required
            value={props.confirmNewPassword}
            onChange={(e) => props.onConfirmNewPasswordSet(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Reset"
          className="register-button input"
          style={{ marginLeft: 0 }}
        />
      </form>
    </>
  );
}
