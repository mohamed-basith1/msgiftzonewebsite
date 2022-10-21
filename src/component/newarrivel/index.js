import React, { useEffect, useState } from "react";
import { Axios } from "../../axios";
import { newarrivels } from "../../data/howtoboxcontant";
import "./newarrivel.css";

const Newarrivel = () => {
  const [newarrivelproduct, setnewarrivelproducts] = useState([]);
  useEffect(() => {
    getnewarrivelsproducts();
  }, []);

  const getnewarrivelsproducts = async () => {
    const res = await Axios.get("/newarrivels/getnewarrivels");
    setnewarrivelproducts(res.data);
  };

  return (
    <div className="newarrivelwarpper" id="newarrivels">
      <div className="newarriveltitlecontainer">
        <div className="newarriveltitle">New Arrivels</div>
        <div className="newarrivelsubtitle">New Gifts and New Ideas</div>
      </div>

      <div className="newarrivelsecond">
        <div className="slider">
          <div className="slidertrack">
            {newarrivelproduct?.map((e) => {
              return (
                <div className="slide">
                  <img src={e.image} className="slideimg" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrivel;
