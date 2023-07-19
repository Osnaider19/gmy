import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="relative flex justify-between py-3 px-16 items-center bg-[#1A1616] text-white">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
