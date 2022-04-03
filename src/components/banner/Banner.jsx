import React, { useState } from "react";
import "./banner.scss";
// import { ImagesData } from "./ImagesData";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import img1 from "../img/slide1.jpg";
import img2 from "../img/slide2.jpg";
import img3 from "../img/slide3.jpg";
import { NavLink } from "react-router-dom";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
  ];
  return (
    <div className="banner">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
              <div className="absolute top-[50%] md:top-[60%] left-10 lg:top-[65%] lg:left-[15%] md:text-2xl">
                <h1 className="text-black md:text-4xl lg:text-[50px] lg:py-10">
                  Group <span className="text-red-600">2</span>
                </h1>
                <p className="text-sm text-gray-600 lg:pb-5">
                  vui lòng click để xem{" "}
                  <span className="text-red-500">shop</span>
                </p>
                <div className="btn text-sm md:text-2xl">
                  <NavLink to="/products">
                    <button className="text-white mt-2 border px-5 py-1 border-white bg-red-500 rounded-md hover:bg-transparent hover:border-red-500">
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
