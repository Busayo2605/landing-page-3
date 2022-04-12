import { FaAlignLeft } from "react-icons/fa";

const MobileNav = ({ isMobile, setisMobile }) => {
  return (
    <div className="flex justify-between b w-[92vw] h-[100%]">
      <FaAlignLeft onClick={() => setisMobile(!isMobile)} className=" " />
      <ul className=" flex flex-col mt-5 mr-5 justify-around gap-2 sm:justify-between w-[90%] sm:w-[100%] text-gray-500 text-center">
        <li className="cursor-pointer sm:text-xl font-bold">Carpet</li>
        <li className="cursor-pointer sm:text-xl">HardWood</li>
        <li className="cursor-pointer sm:text-xl">Luxury vinyl</li>
        <li className="cursor-pointer sm:text-xl">Tile</li>
        <li className="cursor-pointer sm:text-xl">Laminate</li>
      </ul>
    </div>
  );
};

export default MobileNav;
