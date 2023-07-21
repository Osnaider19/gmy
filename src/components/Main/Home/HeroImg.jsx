import React from "react";
import modelo from "../../../img/modelo.png";
import davidlaid from "../../../img/davidlaid.webp";
import "./heroimg.css";

function HeroImg() {
  return (
    <div className="container-img-modelo">
      <div className="img-overflow">
        <img className="img-modelo" src={modelo} />
        <img className="img-david" src={davidlaid} />
      </div>
      <div className="">
        <div className="triangulo-1"></div>
        <div className="triangulo-2"></div>
        <div className="triangulo-3"></div>
      </div>
    </div>
  );
}

export default HeroImg;
