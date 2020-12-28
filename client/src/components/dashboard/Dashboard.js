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
    <div className="dashboard-container">
      <ToastContainer limit={2} />

      <form className="dashboard-form" onSubmit={() => shortenUrl()}>
        <div className="dashboard-form-div">
          <input
            type="text"
            className="input"
            placeholder="Paste long url and shorten it"
            required
            onChange={(e) => onNewUrlChange(e.target.value)}
            style={{
              marginBottom: 0,
              borderRadius: 0,
              border: "none",
              height: "45px",
              fontSize: "16px",
            }}
          />
          <input
            type="submit"
            value="Shorten"
            className="input dashboard-shorten-btn"
            style={{}}
          />
        </div>
      </form>
      <div className="dashboard-link-div">
        {url.map((item) => (
          <div key={item._id} className="dashboard-link">
            <p
              style={{
                borderBottomStyle: "solid",
                borderColor: "#5f5f5f",
                borderWidth: "2px",
                width: "100%",
                paddingBottom: "10px",
                textAlign: "left",
                marginBottom: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontStyle: "Poppins",
              }}
            >
              <div
                style={{
                  background: "#282c34",
                  padding: "5px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Full url
              </div>
              <div>http://{item.fullUrl}</div>
            </p>
            <p
              style={{
                marginTop: 0,
                paddingTop: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  background: "orangered",
                  padding: "5px",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Short url
              </div>
              <a
                href={`http://localhost:3002/${item.shortUrl}`}
                style={{ color: "grey", textDecoration: "none" }}
              >
                http://localhost:3002/{item.shortUrl}
              </a>
            </p>
            <p
              style={{
                borderStyle: "solid",
                borderColor: "#007fff",
                borderWidth: "2px",
                padding: "5px",
                borderRadius: "7px",
                textAlign: "center",
                color: "#007fff",
                display: "flex",
                fontWeight: "bold",
                alignSelf: "flex-end",
              }}
            >
              <div
                style={{
                  background: "#007fff",
                  color: "#fff",
                  padding: "1px",
                  width: "19px",
                  height: "19px",
                  marginRight: "2px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.clicks}
              </div>
              clicks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
