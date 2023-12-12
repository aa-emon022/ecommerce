// Layout2.js
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Layout2(props) {
  const location = useLocation();
  const active = {
    className: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 ",
    // If you want to include a label for reference
  };
  const NonActive = {
    className: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 "
  };

  return (
    <>
      <div className='lg:flex lg:justify-between h-auto  lg:items-center  md:h-[6rem] md:mb-[2rem] lg:pr-[3rem] lg:mb-0 box-border overflow-hidden'>
        <div className='  text-center'><h1 className='my-[3rem] md:my-0 text-[1.5rem]  sm:text-[3rem]  md:text-[2rem] lg:text-[3rem] '>Trending This Week</h1></div>

        <div className="text-center flex justify-center sm:gap-9 md:gap-[2rem] mb-[2rem] md:mb-[2rem] ">
          <NavLink to='/SliderMan' className={`text-[1.6rem] ${location.pathname === '/SliderMan' ? active.className : NonActive.className}`}>
          <button type="button" className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Man Fashion</button>
          </NavLink>
          <Link to='/SliderWoman' className={`text-[1.6rem] ${location.pathname === '/SliderWoman' ? active.className : NonActive.className}`}>
          <button type="button" className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">  Woman Fashion</button>
          </Link>
          <NavLink to='/SliderJelewer' className={`text-[1.6rem] ${location.pathname === '/SliderJelewer' ? active.className : NonActive.className}`}>
          <button type="button" className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Jewelry</button>
          </NavLink>
        </div>
      </div>
      {props.children}
    </>
  );
}
