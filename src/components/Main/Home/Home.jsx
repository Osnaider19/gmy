import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

function Home() {
  return (
    <div className="flex w-[90%] m-auto h-[94vh] justify-center items-center">
      <HeroText />
      <HeroImg />
    </div>
  );
}

export default Home;
