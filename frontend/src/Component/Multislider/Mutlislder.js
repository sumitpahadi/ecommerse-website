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
    items: 5,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
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
                <Link to={"/product/" + item.ID + "/" + item.category}>
                <img src={item.Image} alt="" />
                </Link>
                <p>Brand Rating :{item.Rating}</p>
                <h5>Brand Name :{item.Name}</h5>
                  
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Mutlislder;
