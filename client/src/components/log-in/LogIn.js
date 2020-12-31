import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../style.css";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        case "403":
          toast.error("Mobile number is already registered", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
          break;
        case "406":
          toast.error("Mobile number not valid", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
          break;
        case "404":
          toast.error("Mobile number not registered", {
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

  return (
    <div className="register-container">
      <ToastContainer limit={1} />
      <form className="register-form" onSubmit={handleSubmit.bind(this)}>
        <div className="register-form-div">
          <h2 style={{ color: "#5f5f5f" }}>Log In</h2>

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
        <p style={{ fontSize: "12px" }}>
          Not yet registered?{" "}
          <Link to="/register" style={{ color: "grey" }}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
