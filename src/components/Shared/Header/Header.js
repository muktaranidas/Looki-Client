import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="ml-64">
      <div className="container lg:flex justify-between hidden h-16 mx-auto">
        <div className="flex">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://dhakabankltd.com/wp-content/themes/dhakabankupdate/images/ssl-commerze/bio-xin-cosmeceuticals.png"
              alt=""
              className="w-20"
            />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4  mr-20  font-bold text-xl tracking-tighter"
              >
                DOWNLOAD THE BIO-XIN APP & DISCOVER YOUR TRUE BEAUTY
              </a>
            </li>
            <button className="">
              <a
                href="#_"
                className="inline-block px-4 -mr-8  py-2  text-white font-bold text-xl uppercase bg-orange-300 rounded-full  md:mx-0"
              >
                Download NOW
              </a>
            </button>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-4xl ">
            X
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
