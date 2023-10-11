import React from "react";



import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const select = useSelector((state) => state.cart.data);


  return (
    <div>
      <div className="cart">
        <form className="d-flex" role="search">
          <div className="input-group" style={{ height: "17px" }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <Link to={"/login"}>
            <button className="btn btn-outline-success">Login</button>
          </Link>
          <Link to={"/order"}>
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          </Link>
          <h3> {select.length}</h3>
        </form>
      </div>

     
    </div>
  );
}

export default Cart;
