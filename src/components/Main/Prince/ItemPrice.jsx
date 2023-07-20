import React from "react";
import { data } from "./PriceData";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import BtnStart from "../Home/BtnStart";

const ItemPrice = () => {
  return (
    <>
      {data.map((item) => (
        <li
          key={item.id}
          className="px-3 py-6 max-w-[350px] border-2  border-[#99F51D] rounded-lg overflow-hidden hover:-translate-y-4 transition-transform duration-300"
        >
          <div className="flex justify-center items-center">
            <div dangerouslySetInnerHTML={{ __html: `${item.icon}` }} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center capitalize py-2">
              {item.title}
            </h3>
          </div>
          <div>
            <span className="text-2xl text-center w-full block font-semibold pt-2">{`$${item.price}`}</span>
          </div>
          <div className="flex gap-2 py-4 flex-col">
            {item.access.map((acces) => (
              <div key={acces.title} className="flex gap-2 items-center">
                {acces.estate ? (
                  <i className="font-bold text-2xl text-[#99F51D]">
                    <AiOutlineCheck />
                  </i>
                ) : (
                  <i className="font-bold text-2xl">
                    <AiOutlineClose />
                  </i>
                )}
                <p>{acces.title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-3 pt-7">
          <BtnStart/>
          </div>
        </li>
      ))}
    </>
  );
};

export default ItemPrice;
