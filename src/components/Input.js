import React, { useState } from "react";
import logo from "../logo.svg";

export default function Input(props) {
  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    let value = event.target.value;
    let index = value.indexOf(".mp4");
    if (index === -1) {
      index = value.indexOf(".mov");
      if (index === -1) {
        index = value.indexOf(".avi");
      }
    }
    value = value.substring(0, index + 4);
    setUrl(value);
  };

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <input
        className="App-input"
        type="text"
        value={url}
        onChange={handleChange}
      ></input>
      <button className="App-button" onClick={() => props.setUrl(url)}>
        Add video
      </button>
    </>
  );
}
