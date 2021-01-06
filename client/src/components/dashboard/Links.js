import React from "react";

export default function Links(props) {
  const url = JSON.parse(localStorage.getItem("url")) || props.url;
  return (
    <>
      <div className="dashboard-link-div">
        {url.map((item) => (
          <div key={item._id} className="dashboard-link">
            <p
              style={{
                borderBottomStyle: "solid",
                borderColor: "grey",
                borderWidth: "2px",
                width: "100%",
                paddingBottom: "10px",
                textAlign: "left",
                marginBottom: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                fontStyle: "Poppins",
                wordBreak: "break-all",
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
              <div>{item.fullUrl}</div>
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
                href={`https://lincut.herokuapp.com/${item.shortUrl}`}
                style={{ color: "grey", textDecoration: "none" }}
              >
                https://lincut.herokuapp.com/{item.shortUrl}
              </a>
            </p>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  borderStyle: "solid",
                  borderColor: "grey",
                  borderWidth: "2px",
                  padding: "5px",
                  borderRadius: "7px",
                  textAlign: "center",
                  color: "grey",
                  display: "flex",
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                }}
              >
                {item.date.split("T")[0].split("-").reverse().join("/")}
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "#007fff",
                    color: "#fff",
                    padding: "2px",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    marginRight: "2px",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.clicks}
                </div>
                clicks
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
