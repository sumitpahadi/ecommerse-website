import React from "react";
import "../App.css";
import logo from "../assests/iSHOP Logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <ul>
            <li>
              <img src={logo} alt="" height={"25px"} />
            </li>
            <li>
              An All in one, bringing you on the best platform, knowledge and
              inspiration.
            </li>
            <li>©2023.ClickCart. All Rights reserved Sumit Rawat</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact</li>
            <li>
              {" "}
              <i className="fa-solid fa-house"></i>Vijay Nagar Ghaziabad
            </li>
            <li>
              {" "}
              <i className="fa-solid fa-phone"></i> 91+9625613067
            </li>
            <li>
              {" "}
              <i className="fa-regular fa-envelope-open"></i>{" "}
              sumitrawat1102000@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Link to={"/"}>
              <li>home</li>
            </Link>
            <Link to={"/Mobile/" + "all"}>
              <li>Mobile</li>
            </Link>
            <Link to={"/tablet"}>
              <li>Tablet</li>
            </Link>
            <Link to={"/laptop/" + "all"}>
              <li>Laptop</li>
            </Link>
            <Link to={"/accessories"}>
              <li>Accessories</li>
            </Link>
            <li></li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112091.41276825996!2d77.05917549726564!3d28.604077000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d62472e6819%3A0xc450cbff112a9f61!2sNehru%20Park!5e0!3m2!1sen!2sin!4v1696745422939!5m2!1sen!2sin"
            width="200"
            height="150"
            style={{ border: "1px", marginTop: "10px", borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
