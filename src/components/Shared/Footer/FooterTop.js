import React from "react";
import "./FooterTop.css";
import navLogo from "../../../assets/navLogo.png";
import googlePlay from "../../../assets/google-play-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGooglePlay } from "react-icons/fa";
import Footer from "./Footer";
const FooterTop = () => {
  return (
    <div>
      <footer className="footer py-16  mt-32 mb-0 bodyBackgroundClass">
        <div className="container grid grid-cols-2 mx-auto gap-x-1   px-16  gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          <div className="flex  flex-col space-y-4  ">
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
          <div className="flex flex-col col-span-2 space-y-4 ">
            <h2 className="font-medium headerColor mr-16">
              FIND OUR BRANCH LOCATION
            </h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <a rel="noopener noreferrer" href="#" className="text-white mt-6">
                We are open every day from 11AM to 8PM
              </a>
              <div className="grid grid-cols-2 space-x-16">
                <div className="flex flex-col ">
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> DHANMONDI{" "}
                    <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1 ">
                    <span className="text-white text-xl">+</span> MIRPUR <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> UTTARA <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> SHANTINAGAR{" "}
                    <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> BASHUNDHARA
                    CITY <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> GAZIPUR
                  </a>
                </div>
                <div className="flex flex-col">
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> NARAYANGANJ{" "}
                    <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1 ">
                    <span className="text-white text-xl">+</span> SYLHET <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> RAJSHAHI{" "}
                    <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> CHATTOGRAM{" "}
                    <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> WARI
                    <br />
                  </a>
                  <a rel="noopener noreferrer" href="#" className="py-1">
                    <span className="text-white text-xl">+</span> BANANI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative space-y-4">
            <h2>
              <img
                className="w-28 absolute -top-5  text-teal-accent-400"
                src={navLogo}
                alt=""
              />
            </h2>
            <div>
              <h1 className="footer-corporate-office mt-10 text-xl ">
                Corporate office:
              </h1>
              <h1>Level 4, Cricent View</h1>
              <h1>Road No-02, Cricent View</h1>
              <h1>Mirpur 2, Dhaka-1216</h1>
              <div className="flex flex-row space-x-3  mt-2 text-sm ">
                <a
                  href="#_"
                  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-800 whitespace-no-wrap bg-gray-400  rounded-md shadow-sm  "
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  Call Us
                </a>
                <a
                  href="#_"
                  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-800 whitespace-no-wrap bg-gray-400  rounded-md shadow-sm  "
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  Email Us
                </a>
              </div>
              <div className="flex flex-row  space-x-2 relative mt-4 ">
                <a
                  href="#_"
                  class="inline-flex items-center w-30 h-10 justify-center px-4 py-6 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300  border-blue-700 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  Appointment
                </a>
                <div className="flex flex-row border-2 px-2   rounded-md">
                  <img src={googlePlay} alt="" className="w-7 h-8 mt-1" />
                  <div>
                    <h1 className="text-gray-300 text-sm">GET IT ON</h1>
                    <h1 className="text-white font-bold ">Google Play</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Footer></Footer>
    </div>
  );
};

export default FooterTop;
