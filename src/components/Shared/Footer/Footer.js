import React from "react";
import "./Footer.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import nagadLogo from "../../../assets/Nagad-Logo.png";
import bkashLogo from "../../../assets/BKash-Logo.svg";
import rocketLogo from "../../../assets/dutch-bangla-rocket-logo.png";
import upai from "../../../assets/Upai.png";
import unnamed from "../../../assets/unnamed.png";

const Footer = () => {
  return (
    <footer className="footer 	grid lg:grid-cols-3  relative  p-6 footerbgcolor text-white">
      <div className="mx-auto">
        <p>Copyright 2023 © Bio-Xin Cosmeceuticals </p>
      </div>

      <div className="mx-auto">
        <div className="grid grid-flow-col gap-4">
          <FaFacebookF className="text-3xl p-2 rounded-full  bg-blue-600"></FaFacebookF>
          <IoLogoInstagram className="text-3xl p-2 rounded-full  bg-pink-500"></IoLogoInstagram>
          <IoLogoYoutube className="text-3xl p-2 rounded-full  bg-red-600"></IoLogoYoutube>
        </div>
      </div>
      <div className=" mx-auto grid grid-flow-col gap-1.5 lg:mr-8 ">
        <img src={bkashLogo} alt="" className="w-6 h-6 bg-white  " />
        <img src={nagadLogo} alt="" className="w-6 h-6 bg-white" />
        <img src={rocketLogo} alt="" className="w-6 h-6 bg-white" />
        <img src={upai} alt="" className="w-6 h-6 bg-white" />
        <img src={unnamed} alt="" className="w-6 h-6 bg-white" />
      </div>
    </footer>
  );
};

export default Footer;
