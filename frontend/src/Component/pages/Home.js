// Laptop.js

import React from "react";
import { useContext } from "react";
import { Contextdata } from "../data/Api";
import Mutlislder from "../Multislider/Mutlislder";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import "../App.css";
import ads from "../assests/ads.mp4";

function Laptop() {
  const data1 = useContext(Contextdata);

  return (
    <div>
      <Slider
        image1={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/Jupiter23/OPPO/Uber/V1/D98467701_PC_Hero_3000x1200._CB577020453_.jpg"
        }
        image2={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/PFF-Unrec-3000._CB577063325_.jpg"
        }
        image3={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Jupiter23/KSD/GW/Ugaoo-pc-3000x1200._CB577109172_.jpg"
        }
      ></Slider>
      <div className="home">
        {data1
          .filter((item) => item.ID <= 100 && item.ID > 88)
          .map((item, index) => {
            return (
              <div className="mobileproduct" key={index} id="productsub">
                <div className="innerbox">
                  <div>
                    <img
                      src={item.Image}
                      alt=""
                      height={"200px"}
                      className={`image${item.ID}`}
                    />
                  </div>
                  <h5>{item.Name}</h5>
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
      <h2 className="sales" >Great Indian Festival | Live now</h2>
      <Mutlislder id={20} />

      <br />
      <div>
        <h2 className="sales" >Sales on Big Billion Day</h2>
        <iframe
             height={"300px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
          src="https://www.youtube.com/embed/mWuV75uxgxg"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameBorder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowFullScreen
        ></iframe>

        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/1d2a222a9659fa9d.jpg?q=50"
          alt=""
          height={"300px"}
          width={"100%"}
          className="ads"
        />
      </div>
      <br />
      <Mutlislder id={88} />
      <br />
    </div>
  );
}

export default Laptop;
