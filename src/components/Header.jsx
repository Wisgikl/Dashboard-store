import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
export const Header = () => {
  const [fecha, setFecha] = useState(new Date());

  return (
    <header className=" p-5 pl-[20px]">
      {/*HEADER*/}
      <div className="flex flex-col gap-4 mb-6">
        {/*Title and search*/}
        <div>
          <h1 className=" text-2xl text-gray-300">Storni Resto</h1>
          <p className=" text-gray-500">{fecha.toLocaleDateString()}</p>
        </div>
        <form action="">
          <div className=" w-full relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 " />
            <input
              type="text"
              className=" w-full pl-10 py-1 pr-4 text-gray-300 bg-[#1F1D2B] rounded-full focus:outline-none "
              placeholder="Search "
            />
          </div>
        </form>
      </div>
      {/*Tabs*/}
      <nav className=" text-gray-300 flex items-center justify-between ">
        <a
          href="#"
          className="border-b relative py-2 focus:border-[#ec7c6a]  focus:text-[#ec7c6a]
          "
        >
          Hot dishes
        </a>
        <a
          href="#"
          className="border-b py-2 focus:border-[#ec7c6a]  focus:text-[#ec7c6a]"
        >
          Cold dishes
        </a>
        <a
          href="#"
          className="border-b  py-2 focus:border-[#ec7c6a]  focus:text-[#ec7c6a]"
        >
          Soup
        </a>
        <a
          href="#"
          className="border-b py-2 focus:border-[#ec7c6a] focus:text-[#ec7c6a]"
        >
          Grill
        </a>
      </nav>
    </header>
  );
};
