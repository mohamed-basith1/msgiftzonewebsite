import React from "react";
import Howtobox from "../howtobox";
import "./howto.css";
import { howtoboxcontant } from "../../data/howtoboxcontant";
import { Fade } from "react-reveal";
const Howto = () => {
  return (
    <div className="howtocontainer">
      <div className="howtotitlecontainer">
        <Fade top>
          <div className="howtotitle">How to Buy ?</div>
        </Fade>
        <Fade top>
          <div className="howtosubtitle">
            We Don't Just Sent a Gift.
            <br />
            We Deliver Happiness{" "}
          </div>
        </Fade>
      </div>

      <div className="howtoboxmaincontainer">
        {howtoboxcontant.map((e) => {
          return (
            <Howtobox title={e.title} contant={e.contant} image={e.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Howto;
