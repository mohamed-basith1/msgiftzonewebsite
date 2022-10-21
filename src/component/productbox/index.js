import React, { useState } from "react";
import "./productbox.css";
import Modelbox from "../modelbox";
import { Fade } from "react-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Productbox = ({ data }) => {
  let checkk = "hhhhhhhhhhhhhhhhhhhhhhhhhhhooo";
  console.log(checkk.length);
  console.log(data);
  const [check, setCheck] = useState(false);
  return (
    <div className="productwrapper">
      <Fade bottom cascade>
        <div className="productpicture" onClick={() => setCheck(true)}>
          <LazyLoadImage
            alt={"productimage"}
            height="100%"
            width="100%"
            className="productimg"
            src={data.image}
          />
        </div>
        <div className="producttitleandprice" onClick={() => setCheck(true)}>
          <div className="producttitle">{data.title}</div>
          <div className="productprice"> Size {data.size}</div>
          <div className="productprice">
            Price {"      "} ₹{data.price}
          </div>
        </div>
      </Fade>

      {check ? (
        <>
          <Modelbox images={data.image} setCheck={() => setCheck(false)} />
        </>
      ) : null}
    </div>
  );
};

export default Productbox;
