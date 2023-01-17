import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="mx-16 text-gray-600 text-sm">
      <div className="container flex justify-between  h-16 mx-auto">
        <div className="flex flex-row ">
          <FiPhone className="mt-6"></FiPhone>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <h1>Help line 01302564259</h1>
          </a>
        </div>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              About Us
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>

          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Contact Us
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Bioxin Location
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              News & Events
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Blog
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Vlog
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Career
            </Link>
          </li>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <Link to="/users/login" className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Login
            </a>
          </Link>
          <li className="flex text-black">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              |
            </Link>
          </li>
          <Link to="/users/register" className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Registration
            </a>
          </Link>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
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

export default Nav;
