import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
export default function MenuBar() {
  const [show, setShow] = useState(false);
  const [CountShow,setCountShow]=useState(0)
  useEffect(()=>{
    (async()=>{
    const data=localStorage.getItem("cartItemCount")
    setCountShow(data)
    })()
  },)
  const handleChange = () => {
    setShow(!show);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div className="relative z-10">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className={({isActive})=>`${isActive ? 'text-orange-500': "text-red-700"} flex items-center space-x-3 rtl:space-x-reverse`}
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Welcome
            </span>
          </NavLink>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm   md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
             <p className="text-[1.80rem] absolute -top-[.10rem] border-2 rounded-full w-[2rem] animate-bounce  bg-orange-600">{CountShow}</p>
              
             <NavLink to={"/addCard"}><FontAwesomeIcon
                icon={faCartPlus} 
                className="w-[2rem] h-[2rem] text-gray-700 dark:text-blue-400"
              /></NavLink>
            </button>
            {/* Dropdown menu */}

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={handleChange}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Jelewer"
                  className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
                >
                  Jewelry
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Fashion"
                  className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
                >
                   Fashion
                </NavLink>
              </li>
           
             
              <li>
                <NavLink
                  to="/Contact"
                  className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {show && (
        <div
          className="absolute  items-center justify-between lg:hidden w-full md:flex md:w-auto md:order-1"
          data-aos="fade-down"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/Fashion"
                className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
              >
               Fashion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Jelewer"
                className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
              >
                Jewelry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                className={({isActive})=>`${isActive ? 'text-blue-700': "text-orange-500"}`}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
   
      </div>
  
    </>
  );
}
