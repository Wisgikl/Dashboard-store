import { useState } from "react";
import {
  RiMenuFill,
  RiUser3Line,
  RiAddLargeFill,
  RiShoppingBasket2Line,
  RiCloseLargeFill,
} from "react-icons/ri";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Cart } from "./components/Cart";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/*Menu movil*/}
      <nav
        className=" bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 
      text-3xl text-gray-400 py-3 px-8 flex
       items-center justify-between
       rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLargeFill />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiShoppingBasket2Line />
        </button>
        <button onClick={toggleMenu} className=" text-white p-2 ">
          {showMenu ? <RiCloseLargeFill /> : <RiMenuFill />}
        </button>
      </nav>
      <main className=" lg:pl-28 grid grid-cols-1 lg:grid-cols-8 pb-20 ">
        <div className=" lg:col-span-6 md:p-8">
          <Header />
          <Content />
        </div>

        <div
          className={` lg:col-span-2 fixed  top-0 bg-[#1F1D2B] lg:right-0 lg:w-96 w-full h-full transition-all rounded-tl-xl  ${
            showOrder ? "right-0" : "-right-full"
          }`}
        >
          <Cart toggleOrders={toggleOrders} />
        </div>
      </main>
    </div>
  );
}

export default App;
