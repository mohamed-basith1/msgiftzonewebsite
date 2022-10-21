import React from "react";
import { Fade } from "react-reveal";
import "./howtobox.css";

const Howtobox = ({ title, image, contant }) => {
  return (
    <div className="howtoboxcontainer">
      <Fade left>
        <div className="howtoimagecontainer">
          <img src={image} className="howtoimage" />
        </div>
      </Fade>
      <Fade right>
        <div className="howtoinnertitlecontainer">
          <div className="howtoheading">{title}</div>
          <div className="howtosubheading">{contant}</div>
        </div>
      </Fade>
    </div>
  );
};

export default Howtobox;
