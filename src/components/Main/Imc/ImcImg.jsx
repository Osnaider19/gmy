import React from "react";
import "./imc.css";
import modelo from "../../../img/modeloimc.webp";
function ImcImg() {
  return (
    <div className="div-img">
      <img src={modelo} alt="" className="img-imc-modelo" />
      <div className="triangulo-imc-1"></div>
      <div className="triangulo-imc-2"></div>
      <div className="triangulo-imc-3"></div>
    </div>
  );
}

export default ImcImg;
