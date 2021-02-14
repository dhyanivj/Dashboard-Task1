import React from "react";
import "./section.css";
// import HomeIcon from "@material-ui/icons/Home";
const Section = (props) => {
  return (
    <div className="section">
      <div className="section-left">
        <div className="number"> {props.number}</div>
        <div className="text"> {props.text}</div>
      </div>
      <div className="icon">{props.icon}</div>
    </div>
  );
};

export default Section;
