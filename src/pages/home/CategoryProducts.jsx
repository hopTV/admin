import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import Products from "./Products";
import Pagination from "./Pagination";
import clsx from "clsx";

import { useHistory, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const CategoryProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  // const [filter, setFilter] = useState(product);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  let history = useHistory();

  let query = useQuery();
  // console.log(">>>> ", query.get("cate"));

  let cate = query.get("cate") || "";

  useEffect(() => {
    const getData = async () => {
      setloading(true);
      try {
        const res = await axios.get(
          "https://622c5742087e0e041e08c677.mockapi.io/products/products"
        );
        // console.log(">>>", res.data);
        let data = res.data.filter((pro) =>
          cate === "" ? true : pro.category === cate
        );

        console.log(data);
        setProduct(data);
      } catch (error) {
      } finally {
        setloading(false);
      }

      // console.log(">> check data:", data);
    };
    getData();
  }, [cate]);

  const handleNumber = (pageNumber) => {
    // pageNumber.preventDefault();
    setCurrentPage(pageNumber);
  };

  const handleFilterProduct = (cate) => {
    const newList = product.filter((x) => x.category === cate);
    if (cate === "") {
      history.push("/");
    } else {
      history.push(`/?cate=${cate}`);
    }

    // console.log(newList);
    // setFilter(newList);

    // alert("134");
  };
  console.log(product);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProduct = product.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="bg-white block pt-[30px]">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <h2 className="flex text-center  justify-center mb-[5px] text-[24px]">
            <span className="flex shadow-md mb-[15px] p-3 items-center text-[22px] text-black font-bold">
              Sản Phẩm Nổi Bật
            </span>
          </h2>
        </div>
        <ul className="flex flex-wrap list-none justify-center mb-[15px]">
          <li className="mr-[15px] mb-[10px] flex">
            <button
              className={clsx(
                "btn-category",
                cate === "" &&
                  "bg-transparent text-black border border-solid border-red-600"
              )}
              onClick={() => handleFilterProduct("")}
            >
              Tất Cả Sản Phẩm
            </button>
          </li>
          <li className="mr-[15px] mb-[10px] flex">
            <button
              className={clsx(
                "btn-category",
                cate === "men" && "bg-transparent"
              )}
              onClick={() => handleFilterProduct("men")}
            >
              Thời Trang Nam
            </button>
          </li>
          <li className="mr-[15px] mb-[10px] flex">
            <button
              className={clsx(
                "btn-category",
                cate === "women" && "bg-transparent"
              )}
              onClick={() => handleFilterProduct("women")}
            >
              Thời Trang Nữ
            </button>
          </li>
        </ul>
        <div className="w-full h-full">
          <div className="block">
            <div className="flex-wrap flex justify-center">
              <Products filter={currentProduct} loading={loading} />
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={product.length}
              handleNumber={handleNumber}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
