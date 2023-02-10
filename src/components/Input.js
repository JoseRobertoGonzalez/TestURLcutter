import React, { useState } from "react";
import logo from "../logo.svg";

export default function Input(props) {
  const [url, setUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (event) => {
    let value = event.target.value;
    setInputValue(value);
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

  const clickHandler = () => {
    props.setUrl(url);
    setInputValue("");
  };

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <input
        className="App-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      ></input>
      <button className="App-button" onClick={clickHandler}>
        Add video
      </button>
    </>
  );
}
