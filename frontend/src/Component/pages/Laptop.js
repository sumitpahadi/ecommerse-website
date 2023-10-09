import React from "react";
import { useContext } from "react";
import { Contextdata } from "../data/Api";
import Mutlislder from "../Multislider/Mutlislder";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";

function Laptop() {
  const { brandname } = useParams();
  console.log("brand  is jbnaksjcb" + brandname);
  const data1 = useContext(Contextdata);
  console.log(data1);

  let filteredData;

  if (brandname === "apple") {
    filteredData = data1.filter(item => item.brandname === brandname);
  } else if (brandname === "window") {
    filteredData = data1.filter(item => item.brandname === brandname);
  } else 
  {
    filteredData = data1;
  }

  return (
    <div>
      <div className="home">
        {filteredData
          .filter(item => item.ID <= 32 && item.ID > 20)
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
      <h2 className="sales">Sales on Laptop</h2>
      <iframe
        height={"300px"}
        width={"100%"}
        style={{ borderRadius: "10px" }}
        src="https://www.youtube.com/embed/ALXlKAXOIYE"
        title="🔥 EXCLUSIVE 🔥 Flipkart Big Billion Day Sale 2023 Laptops Deals &amp; Offers 🔥Best Professional Laptops"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      <Mutlislder id={40} />
      <br />
    </div>
  );
}

export default Laptop;
