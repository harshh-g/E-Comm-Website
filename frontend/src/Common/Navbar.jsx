import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 mx-auto container">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Shopify
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Woman
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
          </Link>
          <button className="relative text-black">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />

            <span className="absolute -top-0.5 -right-2 bg-red-500 text-white text-xs  rounded-full px-2  py-0.5 ">
              4
            </span>
          </button>

          <SearchBar />
          <button className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
