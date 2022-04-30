import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleFaBars = () => {
    setToggle(!toggle);
    if (toggle) {
      console.log("true");
    }
  };
  const navigationalLinks = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to={"/"}>
            <img src={logo} alt="cocktail db logo" className="logo" />
          </Link>
          <FaBars className="FaBars" onClick={() => handleFaBars()} />
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className={toggle ? "nav-links-dropdown faBarsActive" : "nav-links-dropdown"}>
        <li>
          <Link to="/" onClick={navigationalLinks} className="navigationalLinks">Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={navigationalLinks} className="navigationalLinks">About</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
