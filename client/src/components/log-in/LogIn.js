import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../style.css";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TypingEffect from "react-typing-effect";
import businessWoman from "./illustrations/business-woman.svg";
import axios from "axios";

export default function LogIn(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState([]);
  const onEmailChange = (val) => {
    setEmail(val);
  };
  const onPasswordChange = (val) => {
    setPassword(val);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.loading(true);
    try {
      const response = await axios.post(
        "https://lincut.herokuapp.com/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem("token", JSON.stringify(token));
        props.loading(false);
        history.push("/dashboard");
      }
    } catch (error) {
      const err = error.message.split(" ")[5];
      props.loading(false);
      switch (err) {
        case "406":
          toast.error("Incorrect password", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
          break;
        case "404":
          toast.error("Account not yet registered", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
          break;
        default:
          toast.error("Network error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
      }

      console.log(err);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/dashboard");
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div className="register-container login">
      <ToastContainer limit={1} />
      <div
        style={{
          color: "#fff",
          fontFamily: "Audiowide",
          fontSize: "30px",
          marginBottom: "10px",
          marginTop: "30px",
        }}
      >
        <TypingEffect
          text={["Lincut..", "Fast..", "Reliable..", "Simple.."]}
          speed={50}
          eraseDelay={0}
        />
      </div>
      <div className="login-div">
        <div
          style={{
            position: "absolute",
            top: "49%",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Audiowide",
          }}
        >
          Log In
        </div>
        <img src={businessWoman} alt="illustration" style={{ height: "50%" }} />
        <form
          className="register-form login"
          onSubmit={handleSubmit.bind(this)}
        >
          <div className="register-form-div">
            <input
              type="email"
              className="register-name input"
              placeholder="Email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              required
            />
            <input
              type="password"
              className="register-name input"
              placeholder="Password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Log In"
              className="register-button input"
            />
          </div>
          <p style={{ fontSize: "12px", paddingBottom: "30px" }}>
            Not yet registered?{" "}
            <Link to="/register" style={{ color: "grey" }}>
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
