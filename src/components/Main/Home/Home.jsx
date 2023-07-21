import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

function Home() {
  return (
    <div className="relative h-auto flex flex-col  justify-center items-center  lg:flex-row lg:h-[94vh] sm:px-9">
      <HeroText />
      <HeroImg />
    </div>
  );
}

export default Home;
