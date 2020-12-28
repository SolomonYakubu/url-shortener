import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Ring } from "awesome-react-spinners";

import "../style.css";

export default function Dashboard(props) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState([]);
  const [url, setUrl] = useState([]);
  const [newUrl, setNewUrl] = useState("");

  // const [pollCreated, setPollCreated] = useState(false);
  const onNewUrlChange = (val) => {
    setNewUrl(val);
  };
  const history = useHistory();

  const fetchData = useCallback(async () => {
    props.loading(true);
    try {
      const response = await axios.get(
        `http://localhost:3002/user/${token.id}`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      setUser(response.data);
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
          setTimeout(() => history.push("/"), 3000);
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
  const shortenUrl = useCallback(async () => {
    if (newUrl === "") {
      return toast.error("Fields cannot be empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: "false",
      });
    }
    props.loading(true);

    try {
      const response = await axios.post(
        `http://localhost:3002/${token.id}`,
        {
          fullUrl: newUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      fetchData();
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
          setTimeout(() => history.push("/"), 3000);
          break;

        default:
          toast.error("Network error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
      }
    }
  }, [newUrl, history, token, props, fetchData]);
  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
    fetchData();

    //eslint-disable-next-line
  }, []);
  console.log(url);
  return (
    <div className="poll-container" style={{ margin: "auto" }}>
      <ToastContainer limit={2} />
      <div className="poll-body" style={{ marginTop: "150px" }}>
        <form className="register-form" onSubmit={() => shortenUrl()}>
          <div className="register-form-div">
            <input
              type="text"
              className="input"
              placeholder="Add new URL"
              required
              onChange={(e) => onNewUrlChange(e.target.value)}
            />
            <input
              type="submit"
              value="Shorten"
              className="input poll-create-poll-btn"
              style={{ alignSelf: "center" }}
            />
          </div>
        </form>
        <div
          className="poll-body"
          style={{ width: "100%", flexDirection: "column-reverse", margin: 0 }}
        >
          {url.map((item) => (
            <div key={item._id}>
              <p>Full: {item.fullUrl}</p>
              <p>
                Short:{" "}
                <a href={`http://localhost:3002/${item.shortUrl}`}>
                  http://localhost:3002/{item.shortUrl}
                </a>
              </p>
              <p>Clicks:{item.clicks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
