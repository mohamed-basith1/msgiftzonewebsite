import React, { useState, useEffect } from "react";
import "./whatmakeus.css";

import Lightheart from "../../assets/lightheart.jpeg";
import Marriagegift from "../../assets/marriagegift.jpeg";
import Spotify from "../../assets/spotify.jpg";
import Couplegift from "../../assets/couplegift.jpeg";
import Curveline from "../../assets/curveline2.png";
import { Fade } from "react-reveal";
import { sideimages } from "../../data/howtoboxcontant";
const Whatmakeus = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    let changeimage = setInterval(() => {
      if (sideimages.length - 1 == state) {
        setState(0);
      } else {
        setState(state + 1);
      }
    }, 10000);
    return () => {
      clearInterval(changeimage);
    };
  }, [state]);

  console.log(state, "image chec");
  return (
    <div className="whatmakeuscontainer">
      <div className="whatmakeleftside">
        <div>
          <Fade bottom>
            <div className="whatmaketitle">
              What Makes us <br /> Difference
            </div>
          </Fade>
          <Fade bottom>
            <div className="whatmakesubtitle">
              Our products are made with high quality imported <br />
              acrylic sheet and unique design
            </div>
          </Fade>
        </div>

        <div className="fourimage">
          <div className="fourimagefirstcontainer">
            <Fade left>
              <div className="fourimagebox">
                <div className="fourcirclecontainer">
                  <div className="fourcircleimageconatiner">
                    <img src={Lightheart} style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="fourimagetitlecontainer">
                  <div className="foutitle">Spotify acrylic light </div>
                  <div className="foursubtitle">dest</div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="fourimagebox">
                <div className="fourcirclecontainer">
                  <div className="fourcircleimageconatiner">
                    <img src={Marriagegift} style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="fourimagetitlecontainer">
                  <div className="foutitle">Spotify acrylic light </div>
                  <div className="foursubtitle">dest</div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="fourimagesecondcontainer">
            <Fade top>
              <div className="fourimagebox2">
                <div className="fourcirclecontainer">
                  <div className="fourcircleimageconatiner">
                    <img src={Spotify} style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="fourimagetitlecontainer">
                  <div className="foutitle">Spotify acrylic light </div>
                  <div className="foursubtitle">dest</div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="fourimagebox2">
                <div className="fourcirclecontainer">
                  <div className="fourcircleimageconatiner">
                    <img src={Couplegift} style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="fourimagetitlecontainer">
                  <div className="foutitle">Spotify acrylic light </div>
                  <div className="foursubtitle">dest</div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div
        className="whatmakerightside"
        // style={{ backgroundImage: `url(${Curveline})` }}
      >
        <Fade right>
          <div className="whatmakeusrightsideimagecontainer">
            <div
              className="sideimage"
              style={{ backgroundImage: `url(${sideimages[state].image})` }}
            ></div>
            {/* <img src={sideimages[state].image} className="sideimage" /> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Whatmakeus;
