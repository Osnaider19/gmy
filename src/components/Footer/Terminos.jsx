import React from "react";
import Redes from "./Redes";
import TextFooter from "./TextFooter";
import "./footer.css";
function Terminos() {
  return (
    <div className="relative pt-14 ">
      <div className="flex justify-between flex-col">
        <TextFooter />
        <Redes />
        <div>
          <div className="w-[90%] m-auto h-[1px] bg-white mt-9"></div>
          <p className="text-center py-3">&copy; fitnation 2023 </p>
          <p className="text-center ">Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Terminos;
