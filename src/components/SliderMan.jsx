import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import ManData from "../assets/json/man.json";
import Layout2 from "../Layout/Layout2";
import { Link, NavLink, Outlet } from "react-router-dom";
export default function SliderMan() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Layout2>
        <Link to={"/"}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[30rem] sm:h-[25rem]  "
          >
            {" "}
            {ManData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto  sm:h-[6rem]">
                {" "}
                <div className="border-2 shadow-lg  sm:h-[23rem]">
                  <NavLink to={"/Fashion"}>
                    <img
                      src={item.image}
                      className="h-[17rem] w-full object-cover "
                    />

                    <div className="text-center">
                      <h1 className="dark:text-[#E1D9D1] font-bold text-[1.5rem]">
                        {item.Title}
                      </h1>
                      <p1 className="dark:text-[#E1D9D1]">{item.Des}</p1>
                      <div className="sm:flex gap-8 md:pl-[2rem] lg:pl-[4rem] xl:pl-[7rem] dark:text-[#b1e366]">
                        <p>Price{item.Price}</p>
                        <p>Discount:{item.Discount}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
      </Layout2>
    </>
  );
}
