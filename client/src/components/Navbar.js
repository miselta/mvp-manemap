import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/stores">Stores</NavLink>
        </li>
        <li>
          <NavLink to="/add-products">Add a Product</NavLink>
        </li>
        <li>
          <NavLink to="/add-stores">Add a Store</NavLink>
        </li>
        {/* <li><NavLink to="/bad-route">Bad!</NavLink></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
