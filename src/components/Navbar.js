import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/addfood">Add Food</Link>
        </li>
        <li>
          <Link to="/displayfood">Display Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
