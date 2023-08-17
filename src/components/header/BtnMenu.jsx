import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
export const BtnMenu = () => {
  const handelmenu = () => {
    const menu = document.querySelector(".nav");
    const backdrop = document.querySelector(".backdrop");
    menu.classList.toggle("-left-[400px]")
    menu.classList.toggle("left-0");
    backdrop.classList.toggle("hidden")
    console.log(menu)
  };
  return (
    <div className="absolute right-4  top-0 h-full  md:hidden py-2 md:py-0">
      <button type="" className="text-3xl px-3" onClick={handelmenu}>
        <i>
          <AiOutlineMenu />
        </i>
      </button>
      <div className="fixed hidden top-[52px] z-30 left-0 bg-black/50 w-full h-screen backdrop" onClick={handelmenu}></div>
    </div>
  );
};
