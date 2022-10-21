import React from "react";
import "./nav.css";

import Logo from "../../assets/finallogon.png";
const Nav = () => {
  return (
    <div className="logocontainer">
      <a
        href="#lander"
        style={{ textDecoration: "none", color: "var(--black)" }}
      >
        <div className="logo">
          <img src={Logo} style={{ width: "100%" }} />
        </div>
      </a>
      <div className="balance">
        {/* <div className="navmenu">
          <a
            href="#newarrivels"
            style={{ textDecoration: "none", color: "var(--black)" }}
          >
            New Arrivels
          </a>
        </div>
        <div className="navmenu">
          <a
            href="#products"
            style={{ textDecoration: "none", color: "var(--black)" }}
          >
            Products
          </a>
        </div>
        <div className="navmenu">
          <a
            href="#contactus"
            style={{ textDecoration: "none", color: "var(--black)" }}
          >
            Contact
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
