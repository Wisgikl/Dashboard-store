import { TbHome } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuPieChart, LuMail } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";
export const Sidebar = () => {
  return (
    <div
      className="bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full
     flex flex-col justify-between
      py-6 rounded-tr-xl rounded-br-xl z-50
      -left-full"
    >
      <div>
        <ul className=" pl-4 ">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5 ">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl ">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4  rounded-xl text-white flex justify-center "
            >
              <TbHome className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors"
            >
              <RiDiscountPercentLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors"
            >
              <LuPieChart className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors"
            >
              <LuMail className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors"
            >
              <HiOutlineBellAlert className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors"
            >
              <SlSettings className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" pl-4 ">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors"
            >
              <IoLogOutOutline className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
