import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <Link to="/about">About</Link>
        <Link to="/advertising">Advertising</Link>
        <Link to="/business">Business</Link>
        <Link to="/howsearchworks">How Search works</Link>
      </div>
      <div className="footer__right">
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  );
};

export default Footer;
