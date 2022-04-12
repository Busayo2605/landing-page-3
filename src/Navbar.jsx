import React from "react";
import { FaAlignLeft } from "react-icons/fa";

const Navbar = ({ setisMobile, isMobile }) => {
  return (
    <div className="w-[95vw] sm:w-[60vw] h-[6vh]">
      <ul className=" hidden md:flex  justify-around sm:justify-between w-[90%] sm:w-[100%] text-gray-500 ">
        <li className="cursor-pointer sm:text-xl font-bold">Carpet</li>
        <li className="cursor-pointer sm:text-xl">HardWood</li>
        <li className="cursor-pointer sm:text-xl">Luxury vinyl</li>
        <li className="cursor-pointer sm:text-xl">Tile</li>
        <li className="cursor-pointer sm:text-xl">Laminate</li>
      </ul>
      <FaAlignLeft
        onClick={() => setisMobile(!isMobile)}
        className="flex md:hidden abosolute left-[100vw]"
      />
    </div>
  );
};

export default Navbar;
