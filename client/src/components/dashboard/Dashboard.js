import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ShortenUrl from "./ShortenUrl";
import Links from "./Links";
import Intro from "./Intro";
import "../style.css";

export default function Dashboard(props) {
  const token = JSON.parse(localStorage.getItem("token"));
  //eslint-disable-next-line

  const [url, setUrl] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [exist, setExist] = useState(true);

  // const [pollCreated, setPollCreated] = useState(false);
  const onNewUrlChange = (val) => {
    setNewUrl(val);
  };
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
  const shortenUrl = useCallback(
    async (e) => {
      e.preventDefault();
      if (newUrl === "") {
        return toast.error("Fields cannot be empty", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: "false",
        });
      }
      const modifiedUrl =
        newUrl.split(":")[0] !== "http" && newUrl.split(":")[0] !== "https"
          ? `http://${newUrl}`
          : `${newUrl}`;
      props.loading(true);

      try {
        await axios.post(
          `https://lincut.herokuapp.com/${token.id}`,
          {
            fullUrl: modifiedUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
        fetchData();
        setNewUrl("");

        props.loading(false);
      } catch (error) {
        console.log(error);
        props.loading(false);
        const err = error.message.split(" ")[5];

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
    },
    [newUrl, history, token, props, fetchData]
  );
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
  console.log(newUrl);
  return (
    <div className="dashboard-container">
      <ToastContainer limit={2} />
      <ShortenUrl
        newUrl={newUrl}
        shortenUrl={shortenUrl}
        onNewUrlChange={onNewUrlChange}
      />

      {
        //eslint-disable-next-line
        exist ? <Links url={url} /> : <Intro />
      }
    </div>
  );
}
