import React from "react";
import BtnRegistar from "./BtnRegistar";
import ItemNav from "./ItemNav";

function Nav() {
  return (
    <div>
      <ul className="relative hidden  justify-center items-center gap-2 z-50 md:flex">
        <ItemNav link={`#`} name={`Inicio`} />
        <ItemNav link={`#`} name={`Productos`} />
        <ItemNav link={`#`} name={`Programas`} />
        <ItemNav link={`#`} name={`Planes`} />
        <ItemNav link={`#`} name={`Nosotros`} />
        <BtnRegistar />
      </ul>
    </div>
  );
}

export default Nav;
