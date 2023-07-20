import React from "react";

function ImcCal() {
  return (
    <div className="w-[50%]">
      <div>
        <h3 className="py-4 text-4xl">CALCULAR TU IMC</h3>
        <p className="w-[90%] text-xl py-3 ">
          la calculadora del índice de masa corporal (IMC) calcula el índice de
          masa corporal a partir de tu peso y altura
        </p>
      </div>
      <div className="w-[90%]">
        <div className="flex gap-8 text-white py-2">
          <div className="relative flex  items-center  outline outline-offset-1 outline-1 outline-[#99F51D] focus:outline-2 rounded overflow-hidden">
            <input
              type="number"
              name=""
              placeholder="170 ARTURA"
              className="bg-transparent h-[45px] outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-xl px-2">Cm</span>
          </div>
          <div className="relative flex  items-center  outline outline-offset-1 outline-1 outline-[#99F51D] focus:outline-2 rounded overflow-hidden">
            <input
              type="number"
              name=""
              placeholder="70 PESO"
              className="bg-transparent h-[45px] outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
            />
            <span className="text-xl px-2">Kg</span>
          </div>
        </div>
        <div className="flex justify-center items-center py-4">
          <button className="py-3  uppercase text-center text-2xl bg-[#99F51D] w-full hover:text-[#1A1616]">
            Calcular Imc
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImcCal;
