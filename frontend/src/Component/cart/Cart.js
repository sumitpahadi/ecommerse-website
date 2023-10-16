import React, { useState, useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [name, setname] = useState("");
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const filteredItems = select.filter((item) => item.user_id === userid);
  const [data1, setdata] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (name === "") {
      setdata([]);
      return;
    }
    const data = {
      search: name,
    };
    axios
      .post("https://ecommerse-5jkm.onrender.com/search", data)
      .then((response) => {
        setdata(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
  };
  const handletoken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
  };

  return (
    <div>
      <div className="cart">
        <form className="d-flex" role="search">
          <div className="input-group1">
            <div className="input-group" style={{ height: "17px" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={name}
                onChange={handleChange}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSubmit}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {data1.length > 0 ? (
              <div className="list">
                <ul>
                  {data1.map((item, index) => (
                    <Link
                      to={"/product/" + item.ID + "/" + item.category}
                      onClick={handleLinkClick} // Call the function to reset name state
                    >
                      <li key={index}>{item.Name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <Link to={"/login"}>
            <button className="btn btn-outline-success login">
              {token ? ( // Check if token is in local storage
                <Link onClick={handletoken}>Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </button>
          </Link>
          <Link to={"/order"}>
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          </Link>
          <h3> {filteredItems.length}</h3>
        </form>
      </div>
    </div>
  );
}

export default Cart;
