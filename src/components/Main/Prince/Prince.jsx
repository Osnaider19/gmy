import React from "react";
import ItemPrice from "./ItemPrice";

const Prince = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center py-5 text-[#99F51D]">
        Elige tu plan y entrena ya
      </h2>
      <div>
        <ul className="relative flex justify-between py-5 ">
          <ItemPrice />
        </ul>
      </div>
    </div>
  );
};

export default Prince;
