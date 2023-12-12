import React, { useEffect, useState } from "react";
import ManData from "../assets/json/man.json";
import WomanData from "../assets/json/woman.json";
import Layout1 from "../Layout/Layout1";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Fashion() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageWoman, setCurrentPageWoman] = useState(1);
  const itemsPerPage = 6;

  const data = ManData;
  const womanData = WomanData;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const itemsPerPageWoman = 6;

  const startIndexWoman = (currentPageWoman - 1) * itemsPerPageWoman;
  const endIndexWoman = startIndexWoman + itemsPerPageWoman;
  const totalPagesWoman = Math.ceil(womanData.length / itemsPerPageWoman);
  const currentDataWoman = womanData.slice(startIndexWoman, endIndexWoman);
  const handlePageChangeWoman = (newPage) => {
    setCurrentPageWoman(newPage);
  };

  const pageNumberWoman = [];
  for (let i = 1; i <= totalPagesWoman; i++) {
    pageNumberWoman.push(i);
  }
  window.scrollTo(0, 0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Layout1>
        <div className="pt-[2rem] bg-[#E1D9D1] dark:bg-[#36454F]">
        <div className="  bg-black flex justify-center items-center" >
            <div
                className="w-40 h-20  text-center flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            >
               <h1> Man's Fashion</h1>
            </div>
        </div>
          <div className="flex flex-wrap justify-center pt-[1rem] gap-5">
           {/* Render your data using the currentData array */}
            {currentData.map((item, index) => (
              <NavLink to={"/manFashion"} key={index}>  <div >
                <img
                  className="w-[10rem] h-[12rem] object-cover"
                  src={item.Image3}
                />
                <h1 className="dark:text-white">{item.Title}</h1>
                <p className="flex gap-4 dark:text-white">
                  {item.Size.map((size, sizeIndex) => (
                    <span key={sizeIndex}>{size} </span>
                  ))}
                </p>
                <p className="flex">
                  <Rating rating={item.Star} />
                </p>
              </div>
              </NavLink>
            ))}

            {/* Render pagination controls */}
          </div>
          
          <div className="pb-[2rem] flex flex-wrap justify-center gap-[4rem] pt-10">
            <div>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Previous
                </span>
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {currentPage} of {totalPages}
              </button>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Next
                </span>
              </button>
            </div>
            <div className="">
              {pageNumber.map((page) => (
                <button
                  key={page}
                  type="button"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        

        {/* Woman Page */}
        <div className="  bg-black flex justify-center items-center">
            <div
                className="w-40 h-20  text-center flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            >
               <h1> Woman's Fashion</h1>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 pt-[3rem] ">
          {currentDataWoman.map((item, index) => (
            <NavLink to={"/womanFashion"} key={index} >    <div >
              <img
                className="w-[10rem] h-[12rem] object-cover"
                src={item.Image2}
              />
              <h1 className="dark:text-white">{item.Title}</h1>
              <p className="flex gap-4 dark:text-white">
                {item.Size.map((size, sizeIndex) => (
                  <span key={sizeIndex}>{size} </span>
                ))}
              </p>
              <p className="flex">
                <Rating rating={item.Star} />
              </p>
               </div></NavLink>
          ))}

          {/* Render pagination controls */}
        </div>
        <div className="flex flex-wrap justify-center gap-[4rem] pt-10">
          <div>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={() => handlePageChangeWoman(currentPageWoman - 1)}
              disabled={currentPageWoman === 1}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Previous
              </span>
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {currentPageWoman} of {totalPagesWoman}
            </button>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={() => handlePageChangeWoman(currentPageWoman + 1)}
              disabled={currentPageWoman === totalPagesWoman}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next
              </span>
            </button>
          </div>
          <div className="">
            {pageNumberWoman.map((page) => (
              <button
                key={page}
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => handlePageChangeWoman(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
        </div>
      </Layout1>
    </>
  );
}
