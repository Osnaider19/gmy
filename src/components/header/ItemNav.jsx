import React from "react";
import { Link } from "react-router-dom";
const ItemNav = ({ link, name }) => {
  return (
    <Link to={link} className="hover:text-[#99F51D] text-xl">
      <li className="px-2 py-1 ">{name}</li>
    </Link>
  );
};

export default ItemNav;
