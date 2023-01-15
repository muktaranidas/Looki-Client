import React from "react";
import "./Footer.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer 	grid lg:grid-cols-3    p-6 footerbgcolor text-white">
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
      <div className=" mx-auto grid grid-flow-col gap-0.5">
        <FaCcVisa className="text-4xl p-1  "></FaCcVisa>
        <FaCcVisa className="text-4xl p-1  "></FaCcVisa>
        <FaCcVisa className="text-4xl p-1  "></FaCcVisa>
        <FaCcVisa className="text-4xl p-1  "></FaCcVisa>
        <FaCcVisa className="text-4xl p-1  "></FaCcVisa>
      </div>
    </footer>
  );
};

export default Footer;
