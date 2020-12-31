import React, { useState } from "react";
import axios from "axios";
import "../style.css";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onNameChange = (val) => {
    setName(val);
  };

  const onEmailChange = (val) => {
    setEmail(val);
  };
  const onPasswordChange = (val) => {
    setPassword(val);
  };
  const handleSubmit = async (e) => {
    props.loading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lincut.herokuapp.com/user/register",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      history.push("/");
      props.loading(false);
      console.log(response.data);
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
      <form
        className="register-form"
        method="POST"
        onSubmit={handleSubmit.bind(this)}
      >
        <div className="register-form-div">
          <h2 style={{ color: "#5f5f5f" }}>Register</h2>
          <input
            type="text"
            className="register-name input"
            placeholder="Name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
          />

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
            value="Register"
            className="register-button input"
          />
        </div>
      </form>
    </div>
  );
}
