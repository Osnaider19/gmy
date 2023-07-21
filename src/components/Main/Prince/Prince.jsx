import React from "react";
import ItemPrice from "./ItemPrice";

const Prince = () => {
  return (
    <div className="bg-gradient-to-t from-transparent via-violet-[#131010] to-sky-900 py-10">
      <h2 className="text-3xl font-semibold text-center py-5 text-[#99F51D]">
        Elige tu plan y entrena ya
      </h2>
      <div className="px-9">
        <ul className="relative flex justify-center py-5 flex-wrap gap-3 lg:justify-between">
          <ItemPrice/>
        </ul>
      </div>
    </div>
  );
};

export default Prince;
