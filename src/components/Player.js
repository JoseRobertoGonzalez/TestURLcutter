import React from "react";

export default function Player(props) {
  return <video className='App-video' src={props.src} controls></video>;
}
