import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post Food</Link>
        </li>
        <li>
          <Link to="/display">Display Foods</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
