import React from "react";
import { useParams } from "react-router-dom";
import { Contextdata } from "../data/Api";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import Mutlislder from "../Multislider/Mutlislder";

function Product() {
  const data = useContext(Contextdata);
  const name = useParams();
  const { id } = useParams();

  return (
    <>
      <div className="productdetail1">
        {data
          .filter((item) => item.ID === parseInt(id))
          .map((item, index) => (
            <div key={index} className="productdetail">
              <div className="productimage">
                <img src={item.Image} alt="click here" height={"300px"} />
              </div>
              <div className="detail">
                <h4>{item.deatilname}</h4>
                <h5>Brand Name: {item.Name}</h5>
                <p>Brand Rating: {item.Rating}</p>
                <p>Brand Sales Price: {item.Saleprice}</p>
                <p>Brand MRP: {item.MRP}</p>
                <p>Warranty: {item.Warranty}</p>
                <p>Delivery: {item.Delivery}</p>
                <ul>
                  <li>{item.Availabeoffer1}</li>
                  <li>{item.Availabeoffer3}</li>
                  <li>{item.Availabeoffer3}</li>
                </ul>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        {/* Render three components only */}
        <Mutlislder id={100} />
      </div>
    </>
  );
}

export default Product;
