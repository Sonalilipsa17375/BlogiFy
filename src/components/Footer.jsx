// import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <h4>All Rights Reserved</h4>
      <div className="profile">
        <Link to="https://github.com/Sonalilipsa17375">
          <IoLogoGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/sonali-lipsa-patra-b17195250/">
          <FaLinkedinIn />
        </Link>
        <Link to="https://leetcode.com/u/sona_8112/">
          <SiLeetcode />
        </Link>
        <Link to="https://www.instagram.com/sonali_lipsa_patra/">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
