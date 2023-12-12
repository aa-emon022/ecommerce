import React, { useEffect, useState } from "react";
import Layout2 from "../Layout/Layout2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function SliderJelewer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const ResJson = await res.json();
        setData(ResJson);
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    })();
  }, []);
  console.log(data);
  if (!data.length > 0) {
    return <Loading />;
  }
  return (
    <>
      <Layout2>
        <Link to={"/jelewer"}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[25rem]  "
          >
            {" "}
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className=" box-border overflow-auto lg:overflow-hidden "
              >
                {" "}
                <div className=" md:shadow-lg h-full md:h-[29rem] lg:h-[23rem] border-2 border-sky-200 ">
                  <img
                    src={item.image}
                    className="h-[10rem] w-full box-border overflow-x-auto "
                  />

                  <div className="text-center">
                    <h1 className="dark:text-[#E1D9D1] font-bold ">
                      {item.title}
                    </h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
      </Layout2>
    </>
  );
}
