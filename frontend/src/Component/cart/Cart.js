import React from "react";
import cart from "../assests/Shopping_cart_icon.svg.png";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assests/iSHOP Logo.svg";
function Cart() {
  const select = useSelector((state) => state.cart.data);

  return (
    <div>
      <div className="cart">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="flex">
          <Link to={"/login"}>
            <button className="btn btn-outline-success">Login</button>
          </Link>
          <Link to={"/order"}>
            <img src={cart} alt="not found" height={"30px"} />
          </Link>
          <h3> {select.length}</h3>

       
        </div>
      </div>
    </div>
  );
}

export default Cart;
