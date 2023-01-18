import React, { useState } from "react";
import navLogo from "../../../assets/navLogo.jpg";
// import profile from "../../../assets/profile.png";
import { HiOutlineShoppingBag, HiUser, IconName } from "react-icons/hi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosSearch, IoSearchOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar   bg-black">
      <div className="navbar-start ml-6">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-yellow-400 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className=" sm:text-black">SKIN CARE</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                TREATMENT
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>SPECIAL OFFER</a>
            </li>
            <li>
              <a>NEW ARRIVAL</a>
            </li>
            <li>
              <a
                href="#_"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300   rounded-md shadow-sm  "
                data-rounded="rounded-md"
                // data-primary="blue-600"
                data-primary-reset="{}"
              >
                APPOINTMNET
              </a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-32" src={navLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal px-1">
          <li tabIndex={0}>
            <a>SKIN CARE</a>
            <ul className="p-2 text-black">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>TREATMENT</a>
            <ul className="p-2 text-black">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>SPECIAL OFFER</a>
          </li>
          <li>
            <a>NEW ARRIVAL</a>
          </li>
          <li>
            <a
              href="#_"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300   rounded-md shadow-sm  "
              data-rounded="rounded-md"
              // data-primary="blue-600"
              data-primary-reset="{}"
            >
              APPOINTMNET
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-12">
        <ul className="hidden items-center space-x-2 lg:flex">
          <li>
            <IoIosSearch className="text-white text-4xl"></IoIosSearch>
          </li>
          <li>
            <HiUser className="text-white text-4xl"></HiUser>
          </li>
          <li>
            <HiOutlineShoppingBag className="text-white text-4xl"></HiOutlineShoppingBag>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
