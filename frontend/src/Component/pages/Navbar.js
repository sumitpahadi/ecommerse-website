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

  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Cart />
      <nav className="navbar navbar-expand-lg  " id="postion">
        <div className="container-fluid">
          <Link className="nav-link " onClick={closeMenu}>
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
              <li className="nav-item3">
                <div class="dropdown dropdown1">
                  <Link
                    class="btn  dropdown-toggle nav-link"
                    to={"/laptop"}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={closeMenu}
                  >
                    Laptop
                  </Link>

                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to={"/laptop/"+"all"}>
                        All
                      </Link>
                    </li>
                    <li>
                      {data1
                        .filter((item) => item.ID === 23)
                        .map((item, index) => {
                          return (
                            <Link
                              class="dropdown-item"
                              to={"/laptop/" + item.brandname}
                            >
                              Mac Book
                            </Link>
                          );
                        })}
                    </li>
                    <li>
                      {data1
                        .filter((item) => item.ID === 32 )
                        .map((item, index) => {
                          return (
                            <Link
                              class="dropdown-item"
                              to={"/laptop/" + item.brandname}
                            >
                              Window
                            </Link>
                          );
                        })}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item2">
                <Link
                  className="nav-link"
                  to={"/laptop/"+"all"}
                  onClick={closeMenu}
                >
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
