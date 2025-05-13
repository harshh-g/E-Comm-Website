import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="mx-auto container flex  justify-between items-center py-3">
        <div className="md:flex lg:flex items-center space-x-4 hidden">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="w-4 h-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block lg:block">
          <a href="Tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
