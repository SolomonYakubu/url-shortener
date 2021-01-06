import React from "react";
import swal from "sweetalert";
export default function Links(props) {
  return (
    <>
      <div className="dashboard-link-div">
        {props.url.map((item) => (
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

              <div
                style={{
                  borderStyle: "solid",
                  borderColor: "grey",
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
                <button
                  style={{
                    borderStyle: "solid",
                    border: "none",
                    padding: "10px",
                    borderRadius: "7px",
                    textAlign: "center",
                    color: "#fff",
                    display: "flex",
                    fontWeight: "bold",
                    background: "#00CD66",
                    marginRight: "10px",
                    outline: "none",
                  }}
                  onClick={() => props.edit(item._id)}
                >
                  Edit
                </button>
                <button
                  style={{
                    borderStyle: "solid",
                    border: "none",
                    padding: "10px",
                    borderRadius: "7px",
                    textAlign: "center",
                    color: "#fff",
                    display: "flex",
                    fontWeight: "bold",
                    background: "#DC143C",
                    outline: "none",
                  }}
                  onClick={() =>
                    swal({
                      text:
                        "Are you sure you want to delete the selected link??",
                      icon: "warning",
                      buttons: { Yes: "Yes", cancel: "No" },
                    }).then((value) => {
                      if (value === "Yes") {
                        props.delete(item._id);
                      }
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
