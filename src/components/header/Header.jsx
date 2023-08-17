import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import { BtnMenu } from "./BtnMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-between py-3 px-4 items-center bg-[#131010] text-white sm:px-9 md:relative md:flex md:justify-between md:w-full">
      <Logo />
      <Nav />
      <BtnMenu/>
    </header>
  );
};

export default Header;
