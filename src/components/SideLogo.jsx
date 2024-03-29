import React from "react";

function SideLogo() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  console.log("url Params: ", urlParams);

  return urlParams.get("name") ? (
    <div style={{ marginTop: 30, marginLeft: 20, marginRight: 30 }}>
      <img src={urlParams.get("logo")} alt="logo" srcset="" />
      <div className="block" />
      <div className="title">{urlParams.get("name")}</div>
      <div className="subtitle">{urlParams.get("details")}</div>
    </div>
  ) : (
    <div style={{ marginTop: 100, marginLeft: 20, marginRight: 30 }}>
      <img src={require("../assets/iiui.png")} alt="iiui" srcset="" />
      <div className="block" />
      <div className="title">Welcome!</div>
      <div className="subtitle">
        To the International Islamic University's Journal, here you can submit
        your journals and research papers associated with your very own
        university. Login and click Get Started to start submission.
      </div>
    </div>
  );
}

export default SideLogo;
