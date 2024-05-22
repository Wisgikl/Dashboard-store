import { RiCloseLargeFill, RiDeleteBinLine } from "react-icons/ri";
import plato2 from "../assets/plato2.png";
export const Cart = ({ toggleOrders }) => {
  const classBtn =
    "bg-[#1F1D2B] rounded-lg p-1  focus:bg-[#ec7c6a] text-[#ec7c6a] focus:text-gray-300 border border-gray-600";
  return (
    //Orders
    <div className="relative pt-16 text-gray-300 p-8 h-full">
      <RiCloseLargeFill
        onClick={toggleOrders}
        className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-lg text-xl"
      />
      <h1 className=" text-2xl my-4">Orders #151416</h1>
      {/*Buttons*/}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <button className={classBtn}>Dine in</button>
        <button className={classBtn}>To go</button>
        <button className={classBtn}>Delivery</button>
      </div>
      {/*Product*/}
      <div className="grid grid-cols-6 mb-4">
        <h5 className=" col-span-3">Item</h5>
        <h5 className="text-center">Qty</h5>
        <h5>Price</h5>
      </div>
      <div className="  h-[500px] overflow-scroll">
        {/*Card*/}

        <div className="bg-[#262837] p-3 rounded-lg mb-4 ">
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
        <div className="bg-[#262837] p-3 rounded-lg mb-4 ">
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
        <div className="bg-[#262837] p-3 rounded-lg mb-4">
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
        <div className="bg-[#262837] p-3 rounded-lg mb-4">
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
        <div className="bg-[#262837] p-3 rounded-lg mb-4">
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
      {/*Submit payment*/}
      <div className=" bg-[#1F1D2B] absolute w-full bottom-0 left-0 p-4  border-t-2 border-gray-500">
        <div className="flex items-center justify-between mb-3">
          <span className=" text-gray-400">Discount</span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className=" text-gray-400">Sub Total</span>
          <span>$21.03</span>
        </div>
        <div className="   mt-2    flex justify-center ">
          <button className="bg-[#ec7c6a] p-2 w-full rounded-lg ">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};
