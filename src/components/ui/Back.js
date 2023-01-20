import React from "react";
import { Link } from "react-router-dom";
import BackSvg from "../../assets/BackSvg";
import "./SquareButton.scss";

const Back = ({ to }) => {
  return (
    <Link to={to}>
      <div className="square-btn">
        <BackSvg />
      </div>
    </Link>
  );
};

export default Back;
