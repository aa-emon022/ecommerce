import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ManData from "../assets/json/woman.json";
import Layout2 from "../Layout/Layout2";
import { Link, NavLink } from "react-router-dom";


export default function SliderWoman() {
 
  return (
    <Layout2>
    
<Link to={"/Fashion"} >
          <Swiper  slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[25rem]  ">
            
              {" "}
              {ManData.map((item, index) => (
                <SwiperSlide key={index} className="h-auto overflow-scroll sm:overflow-visible  md:h-[6rem]"> <div className="border-2 shadow-lg  sm:h-[23rem]">
                
                
             
            <NavLink to={"/Fashion"}>
            <img src={item.image} className="h-[17rem] w-full object-cover "/>
           
           
           <div className="text-center">
           <h1 className="dark:text-[#E1D9D1] font-bold text-[1.5rem]">{item.Title}</h1>
           <p1 className="dark:text-[#E1D9D1]">{item.Des}</p1>
           <div className="sm:flex gap-8 md:pl-[2rem] lg:pl-[4rem] xl:pl-[7rem] dark:text-[#b1e366]"><p>Price{item.Price}</p> 
           <p>Discount:{item.Discount}</p></div>
           </div>
            </NavLink>
                
               
                </div> 
                </SwiperSlide>

              ))}
            
          </Swiper>
        </Link>
  
        
      </Layout2>
  )
}
