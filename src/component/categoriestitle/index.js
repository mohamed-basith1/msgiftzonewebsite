import React from "react";
import "./categoriestitle.css";
const Categoriestitle = ({ title, id, state, setState }) => {
  return (
    <div
      className={id == state ? "ctetitlewrapper" : "noactive"}
      onClick={() => setState(id, title)}
    >
      {title}
    </div>
  );
};

export default Categoriestitle;
