import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { BsDash } from "react-icons/bs";
import "../../index.css";

const MenuItem = (props) => {
  const { showMenu, active } = props;

  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 flex-col h-full bg-black opacity-90 flex overflow-y-scroll z-999999 transtion-all duration-500 items-center w-[320px] gap-8 md:hidden"
        style={{ left: active ? 0 : "-320px" }}
      >
        <div className=" scale-150 text-white absolute top-2 right-2">
          <AiOutlineClose
            onClick={showMenu}
            className="cursor-pointer hover:text-red-600 transition duration-300"
          />
        </div>
        {/* --menu content-- */}
        <div className="flex text-white w-full">
          {/* avartar đăng nhập */}
          <div className="relative top-4 left-4 flex w-11 h-11 bg-orange-500 border rounded-full items-center justify-center">
            <span className="text-xl flex items-center justify-center ">
              A/C
            </span>
          </div>
          <div className="flex-col items-center justify-start mt-5 ml-6">
            <p className="text-sm uppercase  ">đăng nhập</p>
            <p className="text-xs ml-2 pl-2"> nhận nhiều ưu đãi </p>
          </div>
        </div>
        <ul className="relative left-0 top-5 mt-0 h-full w-full text-gray-300">
          <li className="links-mobile relative">
            <NavLink to="/" exact={true}>
              Trang Chủ
            </NavLink>
          </li>
          <li className="relative py-3 px-2 flex-col items-center justify-start border-b ">
            <NavLink
              to="/product"
              className="flex hover:text-red-600 transition-all duration-500"
            >
              Sản Phẩm
            </NavLink>
            {isToggle && (
              <ul className="pl-4 text-[17px] mt-2 transtion-all duration-500">
                <li className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer">
                  <NavLink to="/products/nam">nam</NavLink>
                </li>
                <li className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer">
                  <NavLink to="products/nu">nữ</NavLink>
                </li>
              </ul>
            )}

            <div className="scale-150 absolute right-3 top-4 ">
              <span
                className="cursor-pointer hover:text-red-600"
                onClick={handleToggle}
              >
                {!isToggle ? <MdAdd /> : <BsDash />}
              </span>
            </div>
          </li>
          <li className="links-mobile">
            <NavLink to="news">Tin Tức</NavLink>
          </li>
          <li className="links-mobile">
            <NavLink to="/contact">Liên Hệ</NavLink>
          </li>
          <li className="links-mobile">
            <NavLink to="/helps">Hướng Dẫn</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuItem;
