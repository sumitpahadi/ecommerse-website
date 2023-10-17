import React from "react";
import { useContext } from "react";
import { Contextdata } from "../data/Api";
import Mutlislder from "../Multislider/Mutlislder";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
function Mobile() {
  const { brandname } = useParams();
  const data1 = useContext(Contextdata);
  console.log(data1);

  let filteredData;

  if (brandname === "iphone") {
    filteredData = data1.filter(item => item.brandname === brandname);
  } else if (brandname === "android") {
    filteredData = data1.filter(item => item.brandname === brandname);
  } else 
  {
    filteredData = data1;
  }

  return (
    <div>
      <div className="home">
        {filteredData
          .filter((item) => item.ID <= 20 && item.ID > 1)
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
      <h2 className="sales" >Sales on Mobile Phones</h2>
      <iframe
         height={"300px"}
         width={"100%"}
         style={{borderRadius:"10px"}}
        src="https://www.youtube.com/embed/mSSy8hBa4bY"
        title="Top 10 Crazy Deals In Amazon Great Indian Festival 2023 ⚡ MacBook Air M1, Sony TWS &amp; More!"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      <Mutlislder id={8} />
      <br />
    </div>
  );
}

export default Mobile;
