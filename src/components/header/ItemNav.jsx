import React from "react";
import { Link } from "react-router-dom";
const ItemNav = ({ link, name }) => {
  return (
    <li className="px-2 py-4 md:py-1 ">
      <Link
        to={link}
        className="hover:text-[#99F51D] block py-2 text-xl text-center md:text-start"
      >
        {name}
      </Link>
    </li>
  );
};

export default ItemNav;
