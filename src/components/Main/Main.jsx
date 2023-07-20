import React from "react";
import Home from "./Home/Home";
import Plans from "./Plans/Plans";
import Prince from "./Prince/Prince";
import Imc from "./Imc/Imc";

function Main() {
  return (
    <main className="w-[90%] m-auto">
      <Home />
      <Plans/>
      <Prince/>
      <Imc/>
    </main>
  );
}

export default Main;
