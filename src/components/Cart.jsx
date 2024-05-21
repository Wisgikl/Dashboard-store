import { RiCloseLargeFill, RiDeleteBinLine } from "react-icons/ri";
import plato2 from "../assets/plato2.png";
export const Cart = () => {
  const classBtn =
    "bg-[#1F1D2B] rounded-lg p-1  focus:bg-[#ec7c6a] text-[#ec7c6a] focus:text-gray-300 border border-gray-600";
  return (
    //Orders
    <div className="relative pt-16 text-gray-300 p-8">
      <RiCloseLargeFill className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-lg text-xl" />
      <h1 className=" text-2xl my-4">Orders #151416</h1>
      {/*Buttons*/}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <button className={classBtn}>Dine in</button>
        <button className={classBtn}>To go</button>
        <button className={classBtn}>Delivery</button>
      </div>
      {/*Product*/}
      <div>
        {/*Card*/}
        <div className="grid grid-cols-6 mb-4">
          <h5 className=" col-span-3">Item</h5>
          <h5 className="text-center">Qty</h5>
          <h5>Price</h5>
        </div>
        <div className="bg-[#262837] p-3 rounded-lg ">
          <div className="grid grid-cols-7">
            {/* Product description*/}
            <div className=" col-span-4 flex items-center gap-2">
              <img src={plato2} className=" w-16 h-16 object-cover" />
              <div>
                <h5>Bouillabaisse</h5>
                <p className=" text-sm text-gray-500">$2.29</p>
              </div>
            </div>
            {/*Qty*/}
            <div className=" flex rounded-xl  items-center">
              <span className="  text-center">2</span>
            </div>
            {/*Price*/}
            <div className=" flex rounded-xl  items-center">
              <span className="  text-center">$4.58</span>
            </div>
            <div className=" flex items-center">
              <button className="border border-red-500 p-3  rounded-xl ">
                <RiDeleteBinLine className=" text-red-500 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
