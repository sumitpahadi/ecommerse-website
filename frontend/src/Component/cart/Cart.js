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
  const username = localStorage.getItem("username");
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
  // const handletoken = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userid");
  //   localStorage.removeItem("username");
  // };

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
                      onClick={handleLinkClick}
                    >
                      <li key={index}>{item.Name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <Link style={{ display: "flex" }}>
            
           
              {username ? <div className="username"><h4>{username}</h4></div> :<i className="fa-regular fa-user fa-2xl"></i>}
          
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
