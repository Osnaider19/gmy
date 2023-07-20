import React from "react";

function ItemTerminos({link , name}) {
  return (
    <a href={link} className="transition-colors duration-200 hover:text-[#99F51D] hover:underline ">
      <li className="capitalize">{name}</li>
    </a>
  );
}

export default ItemTerminos;
