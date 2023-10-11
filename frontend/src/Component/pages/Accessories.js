import React from "react";
import { useContext } from "react";
import { Contextdata } from "../data/Api";
import Mutlislder from "../Multislider/Mutlislder";

import { Link } from "react-router-dom";
import "../App.css";
function Accessories() {
  const data1 = useContext(Contextdata);
  console.log(data1);
  return (
    <div>
      {/* <Slider></Slider> */}
      <div className="home">
        {data1
          .filter((item) => item.ID <=80 && item.ID>68)
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
      <h2 className="sales" >Sales on Acessories </h2>

      <iframe
             height={"300px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
          src="https://www.youtube.com/embed/mWuV75uxgxg"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      <br />
      <Mutlislder id={68}/>
      <br />
    </div>
  );
}

export default Accessories;
