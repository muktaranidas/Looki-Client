import React from "react";
import "./FooterTop.css";
import navLogo from "../../../assets/navLogo.jpg";

const FooterTop = () => {
  return (
    <footer className="footer py-16  mt-32 mb-0 bodyBackgroundClass">
      <div className="container grid grid-cols-2 mx-auto gap-x-1     gap-y-8 sm:grid-cols-3 md:grid-cols-4">
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
        <div className="flex flex-col grid-cols-2 space-y-4 ">
          <h2 className="font-medium headerColor mr-16">
            FIND OUR BRANCH LOCATION
          </h2>
          <div className="flex flex-col space-y-2 text-sm ">
            <a rel="noopener noreferrer" href="#" className="text-white mt-6">
              We are open every day from 11AM to 8PM
            </a>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <a rel="noopener noreferrer" href="#" className="py-1">
                  <span className="text-white text-xl">+</span> DHANMONDI <br />
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
                  <span className="text-white text-xl">+</span> BASHUNDHARA CITY{" "}
                  <br />
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
                  <span className="text-white text-xl">+</span> RAJSHAHI <br />
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
        <div className="flex flex-col space-y-4">
          <img className="w-24 text-teal-accent-400" src={navLogo} alt="" />
          <div>
            <h1 className="footer-corporate-office">Corporate office:</h1>
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
            <div className="flex flex-row space-x-3  mt-4 text-sm ">
              <a
                href="#_"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300   rounded-md shadow-sm  "
                data-rounded="rounded-md"
                // data-primary="blue-600"
                data-primary-reset="{}"
              >
                Button Text
              </a>
              <a
                href="#_"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;
