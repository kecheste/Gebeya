import React from "react";
import {
  AiFillAppstore,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Gebeya Market All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillAppstore />
      </p>
    </div>
  );
};

export default Footer;
