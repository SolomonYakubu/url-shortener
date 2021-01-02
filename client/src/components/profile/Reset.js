import React from "react";

export default function componentName() {
  return (
    <>
      <form className="register-form" style={{}}>
        <p style={{ color: "grey", fontFamily: "Audiowide", fontSize: "18px" }}>
          Reset Password
        </p>
        <div className="register-form-div">
          <input
            type="password"
            className="input"
            placeholder="Old Password"
            required
          />
          <input
            type="password"
            className="input"
            placeholder="New Password"
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Repeat New Password"
            required
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
