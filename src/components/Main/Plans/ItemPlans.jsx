import React from "react";
import { FaClock } from "react-icons/fa";
import { MdFlashOff } from "react-icons/md";
import "./Plans.css";
function ItemPlans({ img, title, duration, intensity, description }) {
  return (
    <li className="max-w-[340px] min-h-[490px] rounded-lg pb-4  border-transparent overflow-hidden shadow-md drop-shadow-sm  sm:hover:-translate-y-5 transition-transform duration-200 item-plans">
      <img src={img} alt="" className="w-full h-full object-cover" />
      <h3 className="text-xl py-2 text-center bg-sky-900 text-white font-semibold">
        {title}
      </h3>
      <div className="flex justify-between px-4 pt-3">
        <div className="flex flex-col justify-center items-center w-[50%]">
          <i className="py-1 text-2xl">
            <FaClock />
          </i>
          <p className="font-semibold text-sm">Duración</p>
          <p className="text-sm">{duration}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%]">
          <i className="py-1 text-2xl">
            <MdFlashOff />
          </i>
          <p className="font-semibold text-sm">intencidad</p>
          <p className="text-sm">{intensity}</p>
        </div>
      </div>
      <div className="px-2">
        <p className="py-4">{description}</p>
      </div>
    </li>
  );
}

export default ItemPlans;
