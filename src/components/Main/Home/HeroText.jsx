import React from "react";
import BtnStart from "./BtnStart";

function HeroText() {
  return (
    <div className="relative w-[50%] h-full">
      <div className="w-full h-full pt-36">
        <h2 className="text-5xl font-semibold">
          HAZ QUE TU <span className="block">CUERPO SE FORME</span>
        </h2>
        <p className="py-4 w-[60%] text-2xl">
          Vive la Experiencia tecnología de FitNation de punta y las mejores
          instalaciones
        </p>
        <div className="py-3">
          <BtnStart />
        </div>
      </div>
    </div>
  );
}

export default HeroText;
