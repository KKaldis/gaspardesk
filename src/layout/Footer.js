import React from "react";
import "./Footer.scss";
import logo from "../assets/footer-logo.svg";
import navarrow from "../assets/navarrow.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <hr />
      <div className="footer-container">
        <div>
          <img src={logo} alt="Gaspardesk Logo" />
        </div>
        <div className="footer-col">
          <div className="item">
            Platform
            <img src={navarrow} alt="" />
          </div>
          <div className="sub-item">Integrations</div>
          <div className="sub-item">Pricing</div>
        </div>
        <div className="footer-col">
          <div>Solutions</div>
        </div>
        <div className="footer-col">
          <div>Benefits</div>
        </div>
        <div className="footer-col">
          <div>Blog</div>
        </div>
        <div className="footer-col">
          <div>Request a demo</div>
          <div>Free trial</div>
          <div>Contact Us</div>
          <div>Sitemap</div>
          <div>Privacy Policy</div>
        </div>
        <div className="footer-col">
          <div className="item">
            <img src={linkedin} alt="linkedin" />
            Linkedin
          </div>
          <div className="item">
            <img src={twitter} alt="twitter" />
            Twitter
          </div>
        </div>
      </div>
      <div className="copyright">Copyright @ Gaspardesk</div>
    </motion.div>
  );
};

export default Footer;
