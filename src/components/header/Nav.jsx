import React from "react";
import BtnRegistar from "./BtnRegistar";
import ItemNav from "./ItemNav";
function Nav() {
  return (
    <ul className="fixed bg-[#131010] h-screen gap-5 top-[52px] w-[300px] -left-[400px]   justify-center items-center  z-50 md:flex md:relative md:top-0 md:left-0 md:h-full md:gap-0 md:w-auto transition-all duration-300 nav">
      <ItemNav link={`/`} name={`Inicio`} />
      <ItemNav link={`#`} name={`Productos`} />
      <ItemNav link={`#`} name={`Programas`} />
      <ItemNav link={`#`} name={`Planes`} />
      <ItemNav link={`#`} name={`Nosotros`} />
      <BtnRegistar />
    </ul>
  );
}

export default Nav;
