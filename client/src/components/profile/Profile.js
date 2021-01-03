import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from "./illustrations/profile.svg";
import Reset from "./Reset";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "../style.css";
const Profile = (props) => {
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [hide, setHide] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onOldPasswordSet = (val) => {
    setOldPassword(val);
  };
  const onNewPasswordSet = (val) => {
    setNewPassword(val);
  };
  const onConfirmNewPasswordSet = (val) => {
    setConfirmNewPassword(val);
  };

  const onHide = () => setHide((hide) => !hide);

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
          case "404":
            history.push("/");
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
  const resetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      return toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: "false",
      });
    }
    props.loading(true);

    try {
      const response = await axios.patch(
        `https://lincut.herokuapp.com/user/${token.id}`,
        {
          newPassword,
          oldPassword,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      if (response.status === 200) {
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        onHide();
        swal({
          title: "Success!!! ",
          text: "Your password was updated successfully!",
          icon: "success",
        });
        props.loading(false);
      }
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
        case "406":
          toast.error("Old password incorrect", {
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
    }
  };
  const deleteAccount = () => {
    swal("Enter your password", {
      content: "input",
      buttons: true,
    }).then(async (value) => {
      if (!value) {
        return;
      }
      try {
        props.loading(true);
        const response = await axios({
          url: `https://lincut.herokuapp.com/user/${token.id}`,
          method: "DELETE",
          data: { password: value },
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        });
        if (response.status === 200) {
          swal("Account deleted successfully!");
          localStorage.clear();
          history.push("/");
          props.loading(false);
          return;
        }
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
          case "406":
            toast.error("Password incorrect", {
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
      }
    });
  };
  return (
    <div className="profile-container">
      <ToastContainer limit={1} />

      {hide ? (
        <Reset
          onHide={onHide}
          onOldPasswordSet={onOldPasswordSet}
          onNewPasswordSet={onNewPasswordSet}
          onConfirmNewPasswordSet={onConfirmNewPasswordSet}
          oldPassword={oldPassword}
          newPassword={newPassword}
          confirmNewPassword={confirmNewPassword}
          resetPassword={resetPassword}
        />
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
          <button
            className="profile-reset input delete"
            onClick={deleteAccount}
          >
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
};
export default Profile;
