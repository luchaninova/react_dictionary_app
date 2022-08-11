import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics row mb-5">
      <div className="col-md-6">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
      <div className="col-md-6 text">{props.phonetic.text}</div>
    </div>
  );
}
