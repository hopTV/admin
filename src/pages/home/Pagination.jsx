import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, handleNumber }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className=" container block mt-2">
      <ul className="flex items-center justify-center">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className="  mx-1 border px-3 border-black hover:border-red-600 cursor-pointer transition duration-300 rounded-sm"
            >
              <NavLink onClick={() => handleNumber(number)} to="">
                {number}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
