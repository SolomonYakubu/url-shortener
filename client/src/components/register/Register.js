import React, { useState } from "react";
import axios from "axios";
import "../style.css";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const onEmailChange = (val) => {
    setEmail(val);
  };
  const onPasswordChange = (val) => {
    setPassword(val);
  };
  const onConfirmPasswordChange = (val) => {
    setConfirmPassword(val);
  };
  const handleSubmit = async (e) => {
    props.loading(true);
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        props.loading(false);
        return toast.error("Passwords do not match", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: "false",
        });
      }
      const response = await axios.post(
        "https://lincut.herokuapp.com/user/register",
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

      if (response.status === 201) {
        history.push("/");
        props.loading(false);
        swal({
          title: "Congratulations!!! ",
          text: "Your account has been successfully created!",
          icon: "success",
        });
      }
    } catch (error) {
      const err = error.message.split(" ")[5];
      props.loading(false);
      switch (err) {
        case "400":
          toast.error(
            "Enter a valid email or password, passwords must be at least 6 characters",
            {
              position: "top-right",
              autoClose: 6000,
              hideProgressBar: "false",
            }
          );
          break;
        case "406":
          toast.error("Email is already registered", {
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
            type="password"
            className="register-name input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
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
