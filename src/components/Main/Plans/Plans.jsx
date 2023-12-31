import React from "react";
import ItemPlans from "./ItemPlans";

function Plans() {
  return (
    <div className="relative w-full px-9 pt-10 bg-gradient-to-t from-sky-900 via-violet-[#131010] to-transparent ">
      <div>
        <h2 className="text-4xl text-center font-semibold text-[#99F51D]">
          Nuestros programas
        </h2>
        <p className="text-center text-2xl">Haz que tú cuerpo se forme</p>
      </div>
      <div>
        <ul className="flex justify-center gap-3 items-center flex-wrap py-8 lg:justify-between">
          <ItemPlans
            img={`https://smart-site-assets-production.s3.amazonaws.com/assets/new-home-v4-assets/aulas/zumba-cover.webp`}
            title={`FLEX MUSCLE`}
            duration={`30/50/60 min`}
            intensity={`Alta`}
            description={`creando tensión que hace que las fibras musculares se reduzcan o se contraigan temporalmente`}
          />
          <ItemPlans
            img={`https://smart-site-assets-production.s3.amazonaws.com/assets/new-home-v4-assets/aulas/smart-shape-cover.webp`}
            title={`SMART SHAPE`}
            duration={`30 min`}
            intensity={`Alta`}
            description={`Nuestro circuito exclusivo de adelgazamiento intenso de 30 minutos es una combinación de varios ejercicios.`}
          />
          <ItemPlans
            img={`https://www.theholbrookclub.co.uk/wp-content/uploads/2015/09/BodyCombat.jpg`}
            title={`SMART COMBAT`}
            duration={`30/50 min`}
            intensity={`Alta`}
            description={`Karate, Jiu-jitsu, Capoeira, Kung Fu y Taekwondo son algunas de las inspiraciones para la clase de BodyCombat. Este entrenamiento trabaja todo el cuerpo.`}
          />
        </ul>
      </div>
    </div>
  );
}

export default Plans;
