import React from "react";

function IconRedes({ link, icon }) {
  return (
    <a href={link} className="a-enlace-icono" target="_blank">
      <li className="li-iconos-redes">{icon}</li>
    </a>
  );
}

export default IconRedes;
