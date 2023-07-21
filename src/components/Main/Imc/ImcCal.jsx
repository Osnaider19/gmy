import React from "react";

function ImcCal() {
  return (
    <div className="w-full  lg:w-[50%] justify-center items-center">
      <div className="flex justify-center flex-col">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <h3 className="py-4 text-4xl w-full">CALCULAR TU IMC</h3>
          <p className=" text-xl py-3 ">
            la calculadora del índice de masa corporal (IMC) calcula el índice
            de masa corporal a partir de tu peso y altura
          </p>
        </div>
        <div className="w-full m-auto">
          <div className="flex gap-8 text-white py-2 justify-center lg:justify-start lg:m-0 lg:items-start">
            <div className="relative flex  items-center w-[50%]  outline outline-offset-1 outline-1 outline-[#99F51D] focus:outline-2 rounded overflow-hidden">
              <input
                type="number"
                name=""
                placeholder="170 ARTURA"
                className="bg-transparent h-[45px]  outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <div className="text-xl px-2 absolute top-0 right-0 h-full flex justify-center items-center">Cm</div>
            </div>
            <div className="relative flex  items-center w-[50%] outline outline-offset-1 outline-1 outline-[#99F51D] focus:outline-2 rounded overflow-hidden">
              <input
                type="number"
                name=""
                placeholder="70 PESO"
                className="bg-transparent h-[45px] outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
              />
              <div className="text-xl px-2 absolute top-0 right-0 h-full flex justify-center items-center">Kg</div>
            </div>
          </div>
          <div className="flex justify-center items-center py-4">
            <button className="py-3  uppercase text-center text-2xl bg-[#99F51D] w-full hover:text-[#1A1616]">
              Calcular Imc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImcCal;
