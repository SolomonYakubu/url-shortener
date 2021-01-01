import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
import axios from "axios";

import "../style.css";
const Profile = (props) => {
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  //getData on load

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
    const getData = async () => {
      props.loading(true);
      try {
        const response = await axios.get(
          `https://lincut.herokuapp.com/user/${token.id}`,
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );

        setUser(response.data);

        props.loading(false);
      } catch (error) {
        const err = error.message.split(" ")[5];
        props.loading(false);
        switch (err) {
          case "401":
            toast.error("Session expired", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: "false",
            });
            setTimeout(() => {
              history.push("/");
              localStorage.clear();
            }, 3000);
            break;

          default:
            toast.error("Network error", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: "false",
            });
        }
      }
    };
    getData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="profile-container">
      <ToastContainer limit={1} />
      <div>{user.name}</div>
    </div>
  );
};
export default Profile;
