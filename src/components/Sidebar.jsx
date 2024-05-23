import { TbHome } from "react-icons/tb";
import {
  RiDiscountPercentLine,
  RiShoppingBasket2Line,
  RiStore2Line,
} from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { LuMail } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";
export const Sidebar = (props) => {
  const { showMenu } = props;
  const classLi =
    "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors";
  const classA =
    "group-hover:bg-[#ec7c6a] p-4  rounded-xl text-[#ec7c6a] flex justify-center group-hover:text-white transition-colors";
  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full
     flex flex-col justify-between
      py-3 rounded-tr-xl rounded-br-xl z-50 
      transition-all
      ${showMenu ? " left-0" : "-left-full"}`}
    >
      <div className=" justify-between ">
        <ul className=" pl-4 ">
          <li className="bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="  py-1 rounded-xl text-white flex justify-center w-5/6 "
            >
              <CiShop className="text-4xl text-[#ed5c46]  bg-gradient-to-t" />
            </a>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl ">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4  rounded-xl text-white flex justify-center "
            >
              <TbHome className="text-2xl " />
            </a>
          </li>
          <li className={classLi}>
            <a href="#" className={classA}>
              <RiDiscountPercentLine className="text-2xl " />
            </a>
          </li>
          <li className={classLi}>
            <a href="#" className={classA}>
              <RiShoppingBasket2Line className="text-2xl " />
            </a>
          </li>
          <li className={classLi}>
            <a href="#" className={classA}>
              <LuMail className="text-2xl " />
            </a>
          </li>
          <li className={classLi}>
            <a href="#" className={classA}>
              <HiOutlineBellAlert className="text-2xl " />
            </a>
          </li>
          <li className={classLi}>
            <a href="#" className={classA}>
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
