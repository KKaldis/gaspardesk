import React from "react";
import logo from "../assets/logo.svg";
import navarrow from "../assets/navarrow.svg";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <div className="menu-container">
      <img src={logo} alt="Gaspardesk Logo" />
      <div className="button-wrapper">
        <div className="button-group">
          <div className="button-dropdown">
            <div className="button-outline">
              Platform
              <img src={navarrow} alt="" />
            </div>
            <ul>
              <li className="button-outline">Integrations</li>
              <li className="button-outline">Pricing</li>
            </ul>
          </div>
          <div className="button-outline">Solutions</div>
          <div className="button-outline">Benefits</div>
          <div className="button-outline">Blog</div>
        </div>
        <div className="button-solid">Request a Demo</div>
      </div>
    </div>
  );
};

export default NavMenu;
