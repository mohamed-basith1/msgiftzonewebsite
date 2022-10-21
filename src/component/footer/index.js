import React, { useState } from "react";
import "./footer.css";

import Mail from "../../assets/mail.png";
import Insta from "../../assets/instagram.png";
import Logo from "../../assets/finallogon.png";
import Location from "../../assets/location.png";
import Phone from "../../assets/telephone.png";
import Curveline from "../../assets/curveline2.png";
import { footercontant } from "../../data/howtoboxcontant";
import { Bounce, Fade } from "react-reveal";

const Footer = () => {
  const [contact, setContact] = useState(null);

  return (
    <div
      className="footercontainer"
      id="contactus"
      // style={{ backgroundImage: `url(${Curveline})` }}
    >
      <Fade>
        <div className="footerlogo">
          <div className="footerslogo">
            <img src={Logo} style={{ width: "100%" }} />
          </div>{" "}
        </div>
      </Fade>

      <div className="footersecondcontainer">
        {/* ---- */}
        <div className="aboutusecontainer">
          <Fade top>
            <div className="footermaintitles">ADDRESS</div>
          </Fade>
          <Fade top>
            <div className="smallimagecontainer">
              <div className="smallimage">
                <img src={Location} style={{ height: "100%" }} />
              </div>
              <div className="subtitlefooter">
                Msgiftzone,chetti street
                <br />
                Ayyampet,Thanjavur
                <br />
                614201
              </div>
            </div>
          </Fade>
        </div>

        {/* ---- */}

        <div className="contactuscontainer">
          <Fade top>
            <div className="footermaintitles">CONTACT</div>
          </Fade>
          <Fade top>
            <div className="smallimagecontainer">
              <div className="smallimage">
                <img src={Phone} style={{ height: "100%" }} />
              </div>
              <div className="subtitlefooter"> 9790343367</div>
            </div>
          </Fade>
          <Fade top>
            <div className="smallimagecontainer">
              <div className="smallimage">
                <img src={Mail} style={{ height: "100%" }} />
              </div>
              <div className="subtitlefooter">stickerzone49@gmail.com</div>
            </div>
          </Fade>
        </div>
        {/* --- */}
        <div className="followcontainer">
          <Fade top>
            <div className="footermaintitles">SOCIAL MEDIA</div>
          </Fade>
          <Bounce>
            <div className="smallimageinsta">
              <img src={Insta} style={{ height: "100%" }} />
            </div>
          </Bounce>
        </div>
      </div>

      <div className="footercontantcontainer">
        {/* <div>
          <div className="footercontanttitle">Address</div>
          <div className="footercontainerdesc">
            Msgiftzone,chetti street
            <br />
            Ayyampet,Thanjavur
            <br />
            614201
          </div>
        </div> */}
        {footercontant.map((h, index) => {
          return (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: 10,
                }}
                className="footercontanttitle"
                onClick={() => setContact(index)}
              >
                {h.footertitle}
                <span style={{ color: "gray" }}>&#8595;</span>
              </div>
              {h.footercontant.map((e) => {
                return (
                  <div
                    className={
                      contact == index
                        ? "footercontainerdesc"
                        : "footercontainerdescclose"
                    }
                  >
                    {e.image ? (
                      <div
                        style={{
                          width: "100%",
                          paddingLeft: 30,
                        }}
                      >
                        <div
                          style={{
                            height: 20,
                            width: 20,
                          }}
                        >
                          <img src={e.image} style={{ height: "100%" }} />
                        </div>
                      </div>
                    ) : (
                      e.contant
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="copyright">
        <p>&copy; 2015 Msgiftzone.in</p>
      </div>
    </div>
  );
};

export default Footer;
