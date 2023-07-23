import React, { useState, useEffect } from "react";

function ImcCal() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState("");
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    if (altura == "" || peso == "") {
      setMensaje("Por favor llene todos los campos");
    } else if (imc < 16) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Delgadez severa`
      );
      return;
    } else if (imc >= 16 && imc < 17) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Delgadez moderada`
      );
    } else if (imc >= 17 && imc < 18.5) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Delgadez leve`
      );
    } else if (imc >= 18.5 && imc < 25) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Normal`
      );
    } else if (imc >= 25 && imc < 30) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Sobrepeso`
      );
    } else if (imc >= 30 && imc < 35) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Obesidad leve`
      );
    } else if (imc >= 35 && imc < 40) {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Obesidad media`
      );
    } else {
      setMensaje(
        `su indeice de mas corporal es de ${imc} usted esta en Obesidad mórbida`
      );
    }
    setAltura("");
    setPeso("");
  }, [imc]);

  function calcularIMC() {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(Math.round(imcCalculado.toFixed(2)));
  }

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
                name="altura"
                value={altura}
                placeholder="170 ARTURA"
                onChange={(e) => {
                  setAltura(e.target.value);
                }}
                className="bg-transparent h-[45px]  outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <div className="text-xl px-2 absolute top-0 right-0 h-full flex justify-center items-center">
                Cm
              </div>
            </div>
            <div className="relative flex  items-center w-[50%] outline outline-offset-1 outline-1 outline-[#99F51D] focus:outline-2 rounded overflow-hidden">
              <input
                type="number"
                name="peso"
                value={peso}
                placeholder="70 PESO"
                onChange={(e) => {
                  setPeso(e.target.value);
                }}
                className="bg-transparent h-[45px] w-full outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
              />
              <div className="text-xl px-2 absolute top-0 right-0 h-full flex justify-center items-center">
                Kg
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-4">
            {mensaje ? (
              <p className="py-2 text-start w-full uppercase"> {mensaje} </p>
            ) : (
              " "
            )}
            <button
              className="py-3  uppercase text-center text-2xl bg-[#99F51D] w-full hover:text-[#1A1616]"
              onClick={(e) => {
                calcularIMC();
              }}
            >
              Calcular Imc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImcCal;
