import React from "react";
import "../App.css";
import logo from "../assests/iSHOP Logo.svg"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <ul>
            <li><img src={logo} alt="" height={"25px"} /></li>
            <li>
              An All in one, bringing you on the best platform, knowledge and
              inspiration.
            </li>
            <li>©2023.ClickCart. All Rights reserved</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact</li>
            <li> <i className="fa-solid fa-house"></i>Vijay Nagar Ghaziabad</li>
            <li> <i className="fa-solid fa-phone" ></i>  91+9625613067</li>
            <li> <i className="fa-regular fa-envelope-open"></i> sumitrawat1102000@gmail.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <Link to={"/"}>
              <li>home</li>
            </Link>
            <Link to={"/mobile"}>
              <li >Mobile</li>
            </Link>
            <Link to={"/tablet"}>
              <li>Tablet</li>
            </Link>
            <Link to={"/laptop"}>
              <li>Laptop</li>
            </Link>
            <Link to={"/accessories"}>
            <li>Accessories</li>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
