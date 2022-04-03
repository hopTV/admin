import React, { useEffect, useState } from "react";
import "./scss/homeBanner.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import HomeBanner from "./HomeBanner";
import HomeProducts from "./HomeProducts";
import HomeBannerFooter from "./HomeBannerFooter";
import CategoryProducts from "./CategoryProducts";
import HomeNew from "./HomeNew";

document.title = "home";

const Home = () => {
  const [loading, setloading] = useState(false);
  const [newData, setNewData] = useState([]);

  let settings = {
    dots: true,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const getData = async () => {
      setloading(true);
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/products"
      );
      let data = res.data.slice(0, 8);
      setloading(false);
      setNewData(data);

      // console.log(">> check data:", data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex w-full h-auto relative bg-white justify-center items-center ">
        <div className="flex-col h-auto  w-[90%] my-8 ">
          <div className="mb-[20px] md:mb-[30px] flex items-center justify-center  md:text-2xl">
            <h1 className="title shadow-md text-xl text-gray-900 font-bold py-2 px-5 md:text-4xl">
              sản phẩm mới
            </h1>
          </div>

          <div className=" gird gird-row-1 gap-2 block justify-between  relative">
            <Slider {...settings}>
              {loading === false &&
                newData.map((pro) => {
                  return (
                    <div
                      key={pro.id}
                      className="group w-[200px] flex gap-2 shadow-md my-4 justify-evenly border"
                    >
                      <div className="w-full h-[70%] relative">
                        <NavLink to={`/product/${pro.id}`}>
                          <img
                            className="w-full h-full cursor-pointer"
                            src={pro.imageURL}
                            alt="image"
                          />
                        </NavLink>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-200">
                          <button className="btn-slide">Add To Cart</button>
                          <NavLink to={`/product/${pro.id}`}>
                            <button className="btn-slide">Xem nhanh</button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="text-[14px] mt-3 px-3 relative">
                        <p className="mb-3 truncate">{pro.name}</p>
                        <p className="text-red-500">
                          Giá:{Intl.NumberFormat().format(pro.prices)} đ
                        </p>
                      </div>
                    </div>
                  );
                })}
            </Slider>
            {loading === true && (
              <div className="flex text-xl items-center justify-center">
                loading...
              </div>
            )}
          </div>
        </div>
      </div>
      <HomeBanner />
      <HomeProducts />
      <HomeBannerFooter />
      <CategoryProducts />
      <HomeNew />
    </>
  );
};

export default Home;
