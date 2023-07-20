import React from "react";
import ItemTerminos from "./ItemTerminos";

function FitNationTerminos() {
  return (
    <div className="flex flex-col gap-2 ">
      <h4 className="text-2xl uppercase py-2 font-semibold">FitNation</h4>
      <ItemTerminos link={`#`} name={`Quienes somos`} />
      <ItemTerminos link={`#`} name={`Línea de WhatsApp: 300 161 5191`} />
      <ItemTerminos link={`#`} name={`Trabaja con nosotros`} />
      <ItemTerminos link={`#`} name={`Promociones`} />
      <ItemTerminos link={`#`} name={`Nuestro blog`} />
      <ItemTerminos link={`#`} name={`Tienda FitNation`} />
      <ItemTerminos
        link={`#`}
        name={`Términos y Condiciones sobre el regreso`}
      />
      <ItemTerminos
        link={`#`}
        name={`Superintendencia de industria y comercio.`}
      />
      <ItemTerminos link={`#`} name={`Comunicado a proveedores`} />
      <ItemTerminos link={`#`} name={`Politicas de privacidad `} />
    </div>
  );
}

export default FitNationTerminos;
