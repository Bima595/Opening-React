import React from "react";
import { Link } from "react-router-dom";
import font from "../assets/Fonts/PlusJakartaSans-VariableFont_wght.ttf";

const Navbar = () => {
  const navbarStyle = {
    paddingTop: "30px",
    textAlign: "center",
    fontFamily: { font },
    fontWeight: "500"
  };

  const linkStyle = {
    color: "black",
    fontSize: "20px",
    textDecoration: "none",
    margin: "0 10px",
  };

  const hrStyle = {
    border: "1px solid #ccc",
    margin: "20px 0",
  };

  return (
    <div style={navbarStyle}>
      <Link to={"/home"} style={linkStyle}>
        Home
      </Link>
      <Link to={"/about"} style={linkStyle}>
        About
      </Link>
      <Link to={"/contact"} style={linkStyle}>
        Contact
      </Link>
      <hr style={hrStyle} />
    </div>
  );
};

export default Navbar;
