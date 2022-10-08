import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import React from "react";

function Categories() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>
          <FaHome className="categories" />
          <p>HOME</p>
        </NavLink>
        <NavLink to={"/cuisine/italian"}>
          <FaPizzaSlice className="categories" />
          <p>Italian</p>
        </NavLink>
        <NavLink to={"/cuisine/american"}>
          <FaHamburger className="categories" />
          <p>American</p>
        </NavLink>
        <NavLink to={"/cuisine/thai"}>
          <GiNoodles className="categories" />
          <p>Thai</p>
        </NavLink>
        <NavLink to={"/cuisine/chinese"}>
          <GiChopsticks className="categories" />
          <p>Chinese</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Categories;
