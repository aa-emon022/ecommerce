import React, { useEffect, useRef} from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import womanApi from "../assets/json/woman.json";
import ManApi from "../assets/json/man.json";
import { NavLink, Outlet,  } from "react-router-dom";
import Layout1 from "../Layout/Layout1";
import Footer from "./Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function HomePages() {
  /* Swiper React components */
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const WomanTwoData = womanApi.slice(0, 3);
  const ManToData = ManApi.slice(0, 2);
  const totalData = ManToData.concat(WomanTwoData);
  window.scrollTo(0, 0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <Layout1>
            
    <section className="bg-[#E1D9D1] dark:bg-[#36454F]">
      <div className="" data-aos="zoom-in">
      <div className="h-[3rem]  bg-slate-500 text-warning-100 flex justify-center items-center"><h1 className="">Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer Shop Now</h1></div>
        {/* slider-Bar */}
        <div className="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper border-2 w-[20rem]  sm:w-[30rem] lg:w-[40rem] xl:w-[70rem] h-[30rem]"
          >
            {totalData.map((items, index) => (
              <SwiperSlide key={index} className="bg-gray-400">
                <img
                  src={items.Image2}
                  className="object-contain w-full h-full"
                />
              </SwiperSlide>
            ))}

            <div
              className="autoplay-progress flex justify-end"
              slot="container-end"
            >
              <svg
                viewBox="0 0 48 48"
                ref={progressCircle}
                className="w-[5rem] h-8"
              >
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
        {/* slider-Bar END */}

     
      </div>
      <section className="mt-[3rem]">
        <div className=" my-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 mx-[3rem] ">
        <div className="group">
           <NavLink to='/ManFashion' > <img
              src="https://img.freepik.com/free-photo/handsome-serious-man-dressed-shirt-posing_171337-10513.jpg"
              className=" h-full object-cover brightness-50 hover:scale-[1.15]"
            />
            <div className="relative bottom-[7rem] text-center ">
              <h1 className="text-[1.5rem] text-[#CCCCCC] ">Men's Fashion</h1>
              <div className=" text-white p-2 opacity-0 group-hover:opacity-100 hover:bg-black transition-opacity duration-300">
              Visit Its
              </div>
            </div></NavLink>
          </div>
          <div className="group">
           <NavLink to="/WomanFashion">
           <img
              src="https://media.karousell.com/media/photos/products/2022/4/6/blackpink_ros_cherry_white_wom_1649249806_4f55af8d_progressive.jpg"
              className=" h-full object-cover brightness-50 hover:scale-[1.15]"
            />
            <div className="relative bottom-[7rem] text-center ">
              <h1 className="text-[1.5rem] text-[#CCCCCC] ">Woman's Fashion</h1>
              <div className=" text-white p-2 opacity-0 group-hover:opacity-100 hover:bg-black transition-opacity duration-300">
              Visit Its
              </div>
            </div>
           </NavLink>
          </div>
          <div className="group  ">
            <NavLink to="/Jelewer">
            <img
              src="https://www.investopedia.com/thmb/iICoETnrs3knwomzKogX6FDj1zI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_188501252-5bfc3f0d46e0fb00260fe45a.jpg"
              className=" h-full object-cover brightness-50 hover:scale-[1.15]"
            />
            <div className="relative bottom-[7rem] text-center ">
              <h1 className="text-[1.5rem] text-[#CCCCCC] ">Jewelry</h1>
              <div className=" text-white p-2 opacity-0 group-hover:opacity-100 hover:bg-black transition-opacity duration-300">
              Visit Its
              </div>
            </div>
            </NavLink>
          </div>
          
        </div>
      </section>

      <section className="">
      <div>

      </div>
      <Outlet/>
      </section>
      </section>
    </Layout1>
    <Footer/></>
  );
}
