import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assests/iSHOP Logo.svg";
import Cart from "../cart/Cart";
import { Contextdata } from "../data/Api";
import { useContext } from "react";

function Navbar() {
  const data1 = useContext(Contextdata);
  console.log(data1);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");

  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handletoken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
  };
  return (
    <>
      <Cart />
      <nav className="navbar navbar-expand-lg  " id="postion">
        <div className="container-fluid">
          <Link className="nav-link " onClick={closeMenu} to={"/"}>
            <img
              src={logo}
              alt=""
              height={"20px"}
              style={{ marginBottom: "8px" }}
            />
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
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars fa-2xs"></i>
            </span>
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
              <li className="nav-item3">
                <div className="dropdown dropdown1">
                  <Link
                    className="btn  dropdown-toggle nav-link"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Molbile
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/Mobile/" + "all"}
                        onClick={closeMenu}
                      >
                        All
                      </Link>
                    </li>
                    <li>
                      {data1
                        .filter((item) => item.ID === 2)
                        .map((item, index) => {
                          return (
                            <Link
                              key={index}
                              className="dropdown-item"
                              to={"/Mobile/" + item.brandname}
                              onClick={closeMenu}
                            >
                              Iphone
                            </Link>
                          );
                        })}
                    </li>
                    <li>
                      {data1
                        .filter((item) => item.ID === 1)
                        .map((item, index) => {
                          return (
                            <Link
                              key={index}
                              className="dropdown-item"
                              to={"/Mobile/" + item.brandname}
                              onClick={closeMenu}
                            >
                              Android
                            </Link>
                          );
                        })}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tablet"} onClick={closeMenu}>
                  Tablet
                </Link>
              </li>
              <li className="nav-item3">
                <div className="dropdown dropdown1">
                  <Link
                    className="btn  dropdown-toggle nav-link"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Laptop
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/laptop/" + "all"}
                        onClick={closeMenu}
                      >
                        All
                      </Link>
                    </li>
                    <li>
                      {data1
                        .filter((item) => item.ID === 23)
                        .map((item, index) => {
                          return (
                            <Link
                              key={index}
                              className="dropdown-item"
                              to={"/laptop/" + item.brandname}
                              onClick={closeMenu}
                            >
                              Mac Book
                            </Link>
                          );
                        })}
                    </li>
                    <li>
                      {data1
                        .filter((item) => item.ID === 32)
                        .map((item, index) => {
                          return (
                            <Link
                              key={index}
                              className="dropdown-item"
                              to={"/laptop/" + item.brandname}
                              onClick={closeMenu}
                            >
                              Window
                            </Link>
                          );
                        })}
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li className="nav-item2">
                <Link
                  className="nav-link"
                  to={"/laptop/" + "all"}
                  onClick={closeMenu}
                >
                  Laptop
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/accessories"}
                  onClick={closeMenu}
                >
                  Accessories
                </Link>
              </li>

              {/* ----login- */}
              <li className="nav-item">
                <Link className="nav-link">
                  <Link>
                    <button className="btn btn-outline-success login">
                      {token ? ( // Check if token is in local storage
                        <Link onClick={handletoken}>Logout</Link>
                      ) : (
                        <Link to="/login">Login</Link>
                      )}
                    </button>
                  </Link>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
