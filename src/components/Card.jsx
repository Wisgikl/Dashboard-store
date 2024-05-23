import plato2 from "../assets/plato2.png";
import plato3 from "../assets/plato3.png";
import plato4 from "../assets/plato4.png";
import plato5 from "../assets/plato5.png";
import plato6 from "../assets/plato6.png";
import plato7 from "../assets/plato7.png";
export const Card = () => {
  const classDivImage =
    "bg-[#1F1D2B] px-20 py-6 w-80 rounded-xl flex flex-col items-center text-gray-300 text-center";
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 max-w-120 max-h-120 min-w-120 min-h-120 ">
        <div className={classDivImage}>
          <img
            src={plato2}
            className=" max-w-[300px] min-w-[300px] object-cover -mt-28  "
          />
          <p className=" text-xl">Bouillabaisse</p>
          <span className=" text-gray-400">$2.29</span>
          <p className=" text-gray-500">20 plates available</p>
        </div>
        <div className={classDivImage}>
          <img src={plato3} className=" w-40 h-40 object-cover -mt-24  " />
          <p className=" text-xl">Foie Gras a la Poêle</p>
          <span className=" text-gray-400">$4.40</span>
          <p className=" text-gray-500">10 plates available</p>
        </div>
        <div className={classDivImage}>
          <img src={plato4} className=" w-40 h-40 object-cover -mt-24  " />
          <p className=" text-xl">Coq au Vin</p>
          <span className=" text-gray-400">$2.50</span>
          <p className=" text-gray-500">50 plates available</p>
        </div>
        <div className={classDivImage}>
          <img src={plato5} className=" w-40 h-40 object-cover -mt-24  " />
          <p className=" text-xl">Crème Brûlée de Vainilla de Tahití</p>
          <span className=" text-gray-400">$1.20</span>
          <p className=" text-gray-500">25 plates available</p>
        </div>
        <div className={classDivImage}>
          <img src={plato6} className=" w-30 h-30 object-cover -mt-24  " />
          <p className=" text-xl">Black Truffle Risotto</p>
          <span className=" text-gray-400">$7.00</span>
          <p className=" text-gray-500">12 plates available</p>
        </div>
        <div className={classDivImage}>
          <img src={plato7} className=" w-50 h-44 object-cover -mt-24  " />
          <p className=" text-xl">Wagyu Beef Tenderloin</p>
          <span className=" text-gray-400">$10.30</span>
          <p className=" text-gray-500">5 plates available</p>
        </div>
      </div>
    </>
  );
};
