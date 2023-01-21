import React from "react";
import "./Hero.scss";
import arrow from "../assets/hero-arrow.svg";
import AnimatedO from "./AnimatedO";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-line">
        <div className="hero-rounded">A</div>
        <div className="hero-underlined">touch</div>
        <div className="hero-boxed">of</div>
        <AnimatedO />
      </div>
      <div className="hero-line">
        <img src={arrow} alt="" />
        <div className="hero-solid-bg ">magic</div>
        <div className="hero-underlined">in</div>
        <div className="hero-boxed">IT Support</div>
      </div>
      <p>
        Stories on software, AI, IT support and tips. Βetter understand AI,
        emerging technology and IT support trends, and how they impact your job.
        Browse the latest news, research, product tips and best IT practices, to
        educate yourself, lead the IT game and feel <br />
        empowered to thrive at work.
      </p>
    </div>
  );
};

export default Hero;
