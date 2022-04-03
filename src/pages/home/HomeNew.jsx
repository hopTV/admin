import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { NavLink } from "react-router-dom";

import new1 from "../../components/img/new.webp";
import new2 from "../../components/img/new1.webp";
import new3 from "../../components/img/new2.webp";
import new4 from "../../components/img/new3.webp";
import new5 from "../../components/img/new4.webp";

const HomeNew = () => {
  const newImage = [
    { id: 1, image: new1 },
    { id: 2, image: new2 },
    { id: 3, image: new3 },
    { id: 4, image: new4 },
    { id: 5, image: new5 },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section className="pt-5 block bg-white">
      <div className="container px-2 mx-auto relative">
        <div className="mx-[30px] text-center">
          <h2 className="flex items-end justify-center text-black font-semibold uppercase text-[22px]">
            <span className="border-b flex justify-center">tin tức mới</span>
          </h2>
        </div>
        <div className="relative block mt-[30px]">
          <Carousel breakPoints={breakPoints}>
            {newImage.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center relative flex-wrap"
                >
                  <NavLink to="/news">
                    <div className=" group block overflow-hidden h-[210px] relative mx-3 w-[300px]">
                      <img
                        src={item.image}
                        style={{ height: "100%", width: "100%" }}
                        className="block group-hover:scale-150 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-200 "></div>
                    </div>
                    <div className="relative w-[80%] bg-white mx-auto mt-[-30px] py-3 px-4 shadow-md mb-3">
                      <h3 className="text-gray-800">Tin Tức Sản Phẩm</h3>
                      <p className=" text-sm text-gray-500">
                        Sản Phẩm Cuốn Hút Mang giá Trị Thiên Nhiên
                      </p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeNew;
