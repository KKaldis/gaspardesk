import React from "react";
import "./hero.scss";
import arrow from "./assets/hero-arrow.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-line">
        <div className="hero-rounded">A</div>
        <div className="hero-underlined">touch</div>
        <div className="hero-boxed">of</div>
        <div
          className="hero-rounded"
          style={{ "--hero-border": "var(--secondary)" }}
        ></div>
      </div>
      <div className="hero-line">
        <img src={arrow} />
        <div className="hero-solid-bg ">magic</div>
        <div className="hero-underlined">in</div>
        <div className="hero-boxed">IT Support</div>
      </div>
    </div>
  );
};

export default Hero;
