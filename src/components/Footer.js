import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>India</p>
      <div className="footer__container">
        <div className="footer__left">
          <span>About</span>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search works</span>
        </div>
        <div className="footer__right">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Setting</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
