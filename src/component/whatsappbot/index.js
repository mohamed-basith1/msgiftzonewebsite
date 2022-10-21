import React, { useState, useRef, useEffect } from "react";
import "./whatsappbot.css";
import Whatsapplogo from "../../assets/whatsapp.png";
import Send from "../../assets/send.png";
import Close from "../../assets/close.png";
import ReactWhatsapp from "react-whatsapp";

const Whatsappbot = () => {
  const [message, setMessage] = useState("Hello Msgiftzone!!!");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      inputref.current.focus();
    }
  }, [open]);
  const inputref = useRef(null);
  return (
    <div className="mainwhatsappbot">
      {open ? (
        <div className="whatsappchatboxcontainer">
          <div className="whtapptop">
            <div className="whttitlecont">
              <p className="hithere">Hi there 👋</p>
              <p className="desc">
                Welcome to Social Chat and Share. Ask us anything 🎉
              </p>
            </div>
            <div className="closebutton" onClick={() => setOpen(false)}>
              <img src={Close} style={{ width: "60%" }} />
            </div>
          </div>
          <div className="textcontainer">
            <div className="innertextcontainer">
              <div className="secondwhatsapplogo">
                <img
                  src={Whatsapplogo}
                  style={{ width: "50%", height: "50%", objectFit: "contain" }}
                />
              </div>

              <div className="textcontainerinner">
                Hello! I'm Jibri from the support team.
              </div>
            </div>
          </div>
          <div className="messagecontainer">
            <div className="inputss">
              <input
                ref={inputref}
                className="messageinput"
                placeholder="Send a message..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="sendimg">
              <ReactWhatsapp
                number="+919790343367"
                className="sendimg"
                message={message}
              >
                <img
                  src={Send}
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                />
              </ReactWhatsapp>
            </div>
          </div>
        </div>
      ) : (
        <div className="whatsapplogo" onClick={() => setOpen(true)}>
          <img src={Whatsapplogo} className="walogo" />
        </div>
      )}
    </div>
  );
};

export default Whatsappbot;
