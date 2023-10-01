import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { Contextdata } from "../data/Api";
import { Link } from "react-router-dom";
import "../App.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 300 },
    items: 1, // Adjusted to show only 1 item at a time on mobile
    slidesToSlide: 1
  }
};

const Mutlislder = ({ id }) => {
  const data1 = useContext(Contextdata);

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {data1
          .filter((item) => item.ID < id && item.ID >= id - 8)
          .map((item, index) => {
            return (
              <div className="slider" key={index}>
                <img src={item.Image} alt="" />
                <h5>Brand Name :{item.Name}</h5>
                <p>Brand Rating :{item.Rating}</p>
                <p>Brand Sales Price :{item.Saleprice}</p>
                <p>Brand MRP :{item.MRP}</p>
                <Link to={"/product/" + item.ID + "/" + item.category}>
                  <button>Add To Cart</button>
                </Link>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Mutlislder;
