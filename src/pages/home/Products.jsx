import React from "react";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const { loading, filter } = props;
  // console.log(filter);
  if (loading) {
    return <div className="flex justify-center items-center">loading...</div>;
  }

  return (
    <>
      {loading === false &&
        filter.map((item) => {
          return (
            <div
              key={item.id}
              className=" mx-3 w-[50%] md:w-[30%] lg:w-[20%] flex"
            >
              <div className="  flex flex-col relative overflow-hidden pb-[15px] flex-1">
                <div className=" group text-center relative overflow-hidden w-full p-0 m-0">
                  <NavLink to={`/products/${item.id}`}>
                    <img src={item.imageURL} alt="image" />
                  </NavLink>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-200">
                    <button className="btn-slide">Add To Cart</button>
                    <NavLink to={`/product/${item.id}`}>
                      <button className="btn-slide">Xem nhanh</button>
                    </NavLink>
                  </div>
                </div>
                <div className="flex-1 flex flex-col relative">
                  <h3 className="mb-[5px]  flex flex-auto text-[18px] truncate">
                    {item.name.substring(0, 18)}...
                  </h3>
                  <p className="text-red-600">
                    Giá: {Intl.NumberFormat().format(item.prices)} đ
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Products;
