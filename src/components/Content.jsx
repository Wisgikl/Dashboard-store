import { RiArrowDownWideLine } from "react-icons/ri";
import { Card } from "./Card";

export const Content = () => {
  return (
    <>
      <div className="flex flex-row  items-center justify-between px-5 mb-16">
        <h2 className=" text-xl text-gray-300 ">Choose dishes</h2>
        <button className=" flex items-center gap-4 text-gray-300 bg-[#1F1D2B] rounded-lg p-3 ">
          <RiArrowDownWideLine /> Dine in
        </button>
      </div>

      <Card />
    </>
  );
};
