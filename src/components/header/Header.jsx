import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="relative flex justify-between py-3 px-4 items-center bg-[#131010] text-white sm:px-9 ">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
