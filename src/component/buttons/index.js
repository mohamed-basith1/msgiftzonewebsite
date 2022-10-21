import React from "react";
import "./buttons.css";
const Buttons = ({ contant, left, right, top, bottom }) => {
  return (
    <div
      className="buttons"
      style={{
        color: "white",
        borderRadius: 20,
        paddingLeft: left,
        paddingRight: right,
        paddingTop: top,
        paddingBottom: bottom,
        cursor: "pointer",
      }}
    >
      <a href="#contactus" style={{ textDecoration: "none", color: "white" }}>
        {" "}
        {contant}
      </a>
    </div>
  );
};

export default Buttons;
