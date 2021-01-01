import React from "react";

export default function ShortenUrl(props) {
  return (
    <>
      <form className="dashboard-form" onSubmit={props.shortenUrl.bind(this)}>
        <div className="dashboard-form-div">
          <input
            type="text"
            className="input"
            placeholder="Paste long url and shorten it"
            required
            value={props.newUrl}
            onChange={(e) => props.onNewUrlChange(e.target.value)}
            style={{
              marginBottom: 0,
              borderRadius: 0,
              marginTop: "20px",
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
    </>
  );
}
