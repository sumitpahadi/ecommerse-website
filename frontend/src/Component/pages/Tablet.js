import React from "react";
import { useContext } from "react";
import { Contextdata } from "../data/Api";

import { Link } from "react-router-dom";
import "../App.css";
import Mutlislder from "../Multislider/Mutlislder";
function Tablet() {
  const data1 = useContext(Contextdata);
  console.log(data1);
  return (
    <div>
      {/* <Slider></Slider> */}
      <div className="home">
        {data1
          .filter((item) => item.ID <= 60 && item.ID > 48)
          .map((item, index) => {
            return (
              <div className="mobileproduct" key={index} id="productsub">
                <div className="innerbox">
                  <div>
                    <img src={item.Image} alt="" height={"200px"} />
                  </div>
                  <h5>Brand Name :{item.Name}</h5>
                  <p>Brand Rating :{item.Rating}</p>
                  <p>Brand Sales Price :{item.Saleprice}</p>
                  <p>Brand MRP :{item.MRP}</p>
                  <Link to={"/product/" + item.ID + "/" + item.category}>
                    <button>Add To Cart</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <br />
      <h2 className="sales" >Sales on Tablet</h2>
      <iframe
         height={"300px"}
         width={"100%"}
         style={{borderRadius:"10px"}}
        src="https://www.youtube.com/embed/xUZF6WCoXQY"
        title="Iphone 13 Pre Booking | Iphone 13 &amp; 14 Order Cancel | Big Billion Days 2023 | Open Box Delivery"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Mutlislder id={48} />
      <br />
    </div>
  );
}

export default Tablet;
