import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from "./illustrations/profile.svg";
import Reset from "./Reset";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "../style.css";
const Profile = (props) => {
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [hide, setHide] = useState(false);

  const onHide = () => setHide(true);

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

      {hide ? (
        <Reset />
      ) : (
        <div className="profile-div">
          <img
            src={profile}
            alt="profile"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="profile-user">
            <div>Email</div>
            <div>{user.email}</div>
          </div>
          <button className="profile-reset input" onClick={() => onHide()}>
            Reset Password
          </button>
          <button className="profile-reset input delete">Delete Account</button>
        </div>
      )}
    </div>
  );
};
export default Profile;
