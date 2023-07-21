import React from "react";
import ImcCal from "./ImcCal";
import ImcImg from "./ImcImg";

function Imc() {
  return (
    <div className="flex flex-col gap-3 px-4 justify-center items-center py-9 sm:px-9 lg:flex-row">
      <ImcCal />
      <ImcImg />
    </div>
  );
}

export default Imc;
