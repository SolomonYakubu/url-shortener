import React, { useState, useEffect, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import Links from "./Links";
import Intro from "./Intro";
import axios from "axios";
import "../style.css";
import swal from "sweetalert";
export default function Edit(props) {
  const [url, setUrl] = useState([]);

  const [exist, setExist] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));
  const history = useHistory();
  const fetchData = useCallback(async () => {
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
      //eslint-disable-next-line
      if (response.data.url == 0) {
        props.loading(false);
        localStorage.removeItem("url");

        return setExist(false);
      } else {
        setExist(true);
      }
      localStorage.setItem("url", JSON.stringify(response.data.url));
      setUrl([...response.data.url]);

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
  }, [history, props, token]);
  const deleteUrl = async (val) => {
    props.loading(true);
    try {
      const response = await axios({
        url: `https://lincut.herokuapp.com/${val}`,
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      if (response.status === 200) {
        props.loading(false);
        fetchData();
        swal({
          title: "Success!!! ",
          text: "Link deleted!",
          icon: "success",
        });
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

        default:
          toast.error("Network error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
      }
    }
  };
  const editLink = (val) => {
    swal("Paste new link", {
      content: "input",
      buttons: true,
    }).then(async (value) => {
      if (!value) {
        return;
      }
      const modifiedUrl =
        value.split(":")[0] !== "http" && value.split(":")[0] !== "https"
          ? `http://${value}`
          : `${value}`;
      try {
        props.loading(true);
        const response = await axios({
          url: `https://lincut.herokuapp.com/${val}`,
          method: "PATCH",
          data: { fullUrl: modifiedUrl },
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        });
        if (response.status === 200) {
          fetchData();
          swal("Link Edited!!", { icon: "success" });

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

          case "400":
            toast.error("Link not valid", {
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
  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
    if (localStorage.getItem("url")) {
      return;
    }
    fetchData();

    //eslint-disable-next-line
  }, []);
  return (
    <div className="dashboard-container" style={{ paddingTop: "40px" }}>
      <ToastContainer limit={2} />

      {
        //eslint-disable-next-line
        exist ? (
          <Links url={url} delete={deleteUrl} edit={editLink} />
        ) : (
          <Intro />
        )
      }
    </div>
  );
}
