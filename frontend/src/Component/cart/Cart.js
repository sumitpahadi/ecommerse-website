import React from "react";
import cart from "../assests/Shopping_cart_icon.svg.png";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const select = useSelector((state) => state.cart.data);

  return (
    <div>
      <div className="cart">
        <form
          className="d-flex"
          role="search"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
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
        <sup>
          <Link to={"/order"}>
            <img src={cart} alt="not found" height={"30px"} />
            {select.length}
          </Link>
        </sup>
      </div>
    </div>
  );
}

export default Cart;
