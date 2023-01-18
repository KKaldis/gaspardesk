import React from "react";
import BackSvg from "../../assets/BackSvg";
import "./SquareButton.scss";

const Back = ({ to }) => {
  return (
    <div className="square-btn">
      <BackSvg />
    </div>
  );
};

export default Back;
