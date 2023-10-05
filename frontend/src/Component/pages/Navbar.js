import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assests/iSHOP Logo.svg"
import Cart from "../cart/Cart";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <Cart/>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="postion">
      <div className="container-fluid">
        <Link className="nav-link "  onClick={closeMenu}>
          <img src={logo} alt="" height={"20px"}   style={{marginBottom:"8px"}}/>
         
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
          >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/mobile"} onClick={closeMenu}>
                Mobile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/tablet"} onClick={closeMenu}>
                Tablet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/laptop"} onClick={closeMenu}>
                Laptop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/accessories"}
                onClick={closeMenu}
                >
                Accessories
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */} 
        </div>
      </div>
    </nav>
              </>
  );
}

export default Navbar;
