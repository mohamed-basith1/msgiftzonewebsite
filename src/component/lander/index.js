import React from "react";
import Buttons from "../buttons";
import "./landing.css";
import landimage from "../../assets/biggift.png";
import Curveline from "../../assets/curveline2.png";
import { Fade, Zoom } from "react-reveal";
const Landing = () => {
  return (
    <div className="landingcontainer" id="lander">
      <div className="landleft">
        <Fade bottom>
          <div className="firsttitle">The Best Gift Shop</div>
        </Fade>
        <Fade bottom>
          <div className="secondtitle">
            Creating Happiness <br />
            For Your Loved Ones
          </div>
        </Fade>
        <Fade bottom>
          <div className="thirdtitle">
            Browse through some of the larget collection gifts to <br />
            brighten your day
          </div>
        </Fade>

        <Buttons
          contant={"Contact us"}
          left={"10%"}
          right={"10%"}
          bottom={"1%"}
          top={"1%"}
        />
      </div>
      <div className="landright">
        <Fade right>
          <div className="landimage">
            <img src={landimage} className="biggift" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Landing;
