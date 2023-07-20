import React from "react";
import ItemTerminos from "./ItemTerminos";

function PlansTerminos() {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-2xl uppercase py-2 font-semibold">Planes</h4>
      <ItemTerminos link={`#`} name={`contratos`} />
      <ItemTerminos link={`#`} name={`planes`} />
      <ItemTerminos
        link={`#`}
        name={`Términos y condiciones Entrénate para la vida 2023`}
      />
      <ItemTerminos link={`#`} name={`Términos y condiciones Smart Fit Go`} />
      <ItemTerminos link={`#`} name={`Términos y condiciones Nuevas Sedes`} />
      <ItemTerminos link={`#`} name={`Términos y condiciones Day Pass`} />
      <ItemTerminos
        link={`#`}
        name={`Terminos y condiciones Open House 2023`}
      />
      <ItemTerminos
        link={`#`}
        name={`Terminos y Condiciones Anual Davivienda`}
      />
      <ItemTerminos
        link={`#`}
        name={`Terminos y Condiciones Anual Davivienda`}
      />
      <ItemTerminos
        link={`#`}
        name={`Terminos y condiciones Promo Flash Mayo 2023`}
      />
    </div>
  );
}

export default PlansTerminos;
