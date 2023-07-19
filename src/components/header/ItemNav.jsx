import React from "react";

const ItemNav = ({ link, name }) => {
  return (
    <a href={link} className="hover:text-[#99F51D] text-xl">
      <li className="px-2 py-1 ">{name}</li>
    </a>
  );
};

export default ItemNav;
