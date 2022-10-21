import React from "react";
import { Zoom } from "react-reveal";
import Pulse from "react-reveal/Pulse";
import "./modelbox.css";
const Modelbox = ({ images, setCheck }) => {
  console.log(images, "image checking");
  return (
    <>
      <div className={"modelwrapper"} onClick={() => setCheck()}>
        <div className="modelimagecontainer">
          <img src={images} className="modelimage" />
        </div>
      </div>
    </>
  );
};

export default Modelbox;
