import React from "react";
import ItemTerminos from "./ItemTerminos";
import Redes from "./Redes";
import FitNationTerminos from "./FitNationTerminos";
import PlansTerminos from "./PlansTerminos";

function Terminos() {
  return (
    <div className="pt-14">
      <ul className="flex justify-between">
        <FitNationTerminos />
        <PlansTerminos />
        <Redes />
      </ul>
    </div>
  );
}

export default Terminos;
