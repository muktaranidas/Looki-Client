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
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1"
            >
              Login
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
              Registration
            </Link>
          </li>
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

    // <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    //   <div className="relative flex grid items-center grid-cols-1 lg:grid-cols-2">
    //     <ul className="flex items-center hidden  lg:flex">
    //       <Link className="ml-6">
    //         <a href="/" className=" text-gray-600 inline-block  duration-200 ">
    //           <FiPhone></FiPhone>
    //           Help line 01302-564259
    //         </a>
    //       </Link>
    //     </ul>
    //     <ul className="flex items-center hidden text-gray-600  ml-auto space-x-2 lg:flex">
    //       <Link to="/about-us">About Us</Link>
    //       <Link>|</Link>
    //       <Link to="/about-us">Contact Us</Link>
    //       <Link>|</Link>
    //       <Link to="/about-us">Bioxin Location</Link>
    //       <Link>|</Link>
    //       {/* <Link to="/about-us">News & Events</Link> */}
    //       <Link to="/about-us">Blog</Link>
    //       <Link>|</Link>
    //       <Link to="/about-us">Vlog</Link>
    //       <Link>|</Link>
    //       {/* <Link to="/about-us">Career</Link> */}
    //       <Link to="/about-us">Login</Link>
    //       <Link>|</Link>
    //       <Link to="/about-us">Registration</Link>
    //     </ul>
    //     <div className="ml-auto lg:hidden">
    //       <button
    //         aria-label="Open Menu"
    //         title="Open Menu"
    //         className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
    //         onClick={() => setIsMenuOpen(true)}
    //       >
    //         <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    //           <path
    //             fill="currentColor"
    //             d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
    //           />
    //           <path
    //             fill="currentColor"
    //             d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
    //           />
    //           <path
    //             fill="currentColor"
    //             d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
    //           />
    //         </svg>
    //       </button>
    //       {isMenuOpen && (
    //         <div className="absolute top-0 left-0 w-full">
    //           <div className="p-5 bg-white border rounded shadow-sm">
    //             <div className="flex items-center justify-between mb-4">
    //               <div>
    //                 <a
    //                   href="/"
    //                   aria-label="Company"
    //                   title="Company"
    //                   className="inline-flex items-center"
    //                 >
    //                   <svg
    //                     className="w-8 text-deep-purple-accent-400"
    //                     viewBox="0 0 24 24"
    //                     strokeLinejoin="round"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeMiterlimit="10"
    //                     stroke="currentColor"
    //                     fill="none"
    //                   >
    //                     <rect x="3" y="1" width="7" height="12" />
    //                     <rect x="3" y="17" width="7" height="6" />
    //                     <rect x="14" y="1" width="7" height="6" />
    //                     <rect x="14" y="11" width="7" height="12" />
    //                   </svg>
    //                   <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
    //                     Company
    //                   </span>
    //                 </a>
    //               </div>
    //               <div>
    //                 <button
    //                   aria-label="Close Menu"
    //                   title="Close Menu"
    //                   className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    //                   onClick={() => setIsMenuOpen(false)}
    //                 >
    //                   <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    //                     <path
    //                       fill="currentColor"
    //                       d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
    //                     />
    //                   </svg>
    //                 </button>
    //               </div>
    //             </div>
    //             <nav>
    //               <ul className="space-y-4">
    //                 <li>
    //                   <a
    //                     href="/"
    //                     aria-label="Our product"
    //                     title="Our product"
    //                     className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                   >
    //                     Product
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="/"
    //                     aria-label="Our product"
    //                     title="Our product"
    //                     className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                   >
    //                     Features
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="/"
    //                     aria-label="Product pricing"
    //                     title="Product pricing"
    //                     className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                   >
    //                     Pricing
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="/"
    //                     aria-label="Sign in"
    //                     title="Sign in"
    //                     className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    //                   >
    //                     Sign in
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="/"
    //                     className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //                     aria-label="Sign up"
    //                     title="Sign up"
    //                   >
    //                     Sign up
    //                   </a>
    //                 </li>
    //               </ul>
    //             </nav>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Nav;
