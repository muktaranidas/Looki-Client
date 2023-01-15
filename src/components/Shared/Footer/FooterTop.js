import React from "react";
import "./FooterTop.css";
import navLogo from "../../../assets/navLogo.jpg";

const FooterTop = () => {
  return (
    <footer className="p-16  mt-32  bodyBackgroundClass">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium headerColor">ABOUT US</h2>
          <div className="flex flex-col space-y-2 text-sm pt-6 ">
            <a rel="noopener noreferrer" href="#" className="py-1">
              About Looki
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              News & Events
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Skin care Blog
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Our Location
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Contact Us
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Submit Your Complain
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium headerColor">MY ACCOUNT</h2>
          <div className="flex flex-col space-y-2 text-sm pt-6 ">
            <a rel="noopener noreferrer" href="#">
              Login
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Order History
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              My Wishlist
            </a>
            <a rel="noopener noreferrer" href="#" className="py-1">
              Track Order
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="py-1 footer-earn-money"
            >
              Earn Money
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium headerColor">FIND OUR BRANCH LOCATION</h2>
          <div className="flex flex-col space-y-2 text-sm ">
            <a rel="noopener noreferrer" href="#">
              Configuration
            </a>
            <a rel="noopener noreferrer" href="#">
              Theme Configuration
            </a>
            <a rel="noopener noreferrer" href="#">
              Breakpoints
            </a>
            <a rel="noopener noreferrer" href="#">
              Customizing Colors
            </a>
            <a rel="noopener noreferrer" href="#">
              Customizing Spacing
            </a>
            <a rel="noopener noreferrer" href="#">
              Configuring Variants
            </a>
            <a rel="noopener noreferrer" href="#">
              Plugins
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <img className="w-24 text-teal-accent-400" src={navLogo} alt="" />
          <div>
            <h1 className="footer-corporate-office">Corporate office: </h1>
            <h1>Level 4, Cricent View</h1>
            <h1>Road No-02, Cricent View</h1>
            <h1>Mirpur 2, Dhaka-1216</h1>
            <div className="flex flex-row space-x-3  mt-2 text-sm ">
              <button className="btn ">Call Us</button>
              <button className="btn ">Call Us</button>
            </div>
            <div className="flex flex-row space-x-3  mt-2 text-sm ">
              <button className="btn ">Call Us</button>
              <button className="btn ">Call Us</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;
