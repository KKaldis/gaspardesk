import React, { useEffect } from "react";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.svg";
import img5 from "../assets/5.svg";
import img6 from "../assets/6.svg";
import img7 from "../assets/7.svg";
import img8 from "../assets/8.svg";
import Img9 from "../assets/9";
import img10 from "../assets/10.svg";
import animation from "./animationSequence";

export const AnimatedO = () => {
  useEffect(() => {
    animation();
  }, []);

  return (
    <div
      className="hero-rounded"
      style={{ "--hero-border": "var(--secondary)" }}
    >
      <span>
        <img src={img1} id="anim-item-1" alt="" />
        <img src={img2} id="anim-item-2" alt="" />
        <img src={img3} id="anim-item-3" alt="" />
        <img src={img4} id="anim-item-4" alt="" />
        <img src={img5} id="anim-item-5" alt="" />
        <img src={img6} id="anim-item-6" alt="" />
        <img src={img7} id="anim-item-7" alt="" />
        <img src={img8} id="anim-item-8" alt="" />
        <Img9 id="anim-item-9" />
        <img src={img10} id="anim-item-10" alt="" />
        <img src={img1} id="anim-item-11" alt="" />
      </span>
    </div>
  );
};

export default AnimatedO;
