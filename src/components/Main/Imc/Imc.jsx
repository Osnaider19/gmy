import React from "react";
import ImcCal from "./ImcCal";
import ImcImg from "./ImcImg";

function Imc() {
  return (
    <div className="flex justify-center items-center py-9">
      <ImcCal />
      <ImcImg />
    </div>
  );
}

export default Imc;
