import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <button type="button">
        <Link to={"/"}>Landing</Link>
      </button>
      <button type="button">
        <Link to={"/home"}>Home</Link>
      </button>
      <button type="button">
        <Link to={"/about"}>About</Link>
      </button>
      <button type="button">
        <Link to={"/contact"}>Contact</Link>
      </button>
      {/* //   <button type="button">Home</button>
        //   <button type="button">About</button>
        //   <button type="button">Contact</button> */}
    </div>
  );
};

export default Navbar;
