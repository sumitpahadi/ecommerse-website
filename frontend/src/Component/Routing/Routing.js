import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Laptop from "../pages/Laptop";
import Accessories from "../pages/Accessories";
import Mobile from "../pages/Mobile";
import Tablet from "../pages/Tablet";
import Api from "../data/Api";
import Product from "../Product/Product";
import Order from "../Add to cart/Order";

function Routing() {
  return (
    <div>
        <Api>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id/:name" element ={<Product/>}/>
          <Route path="/order" element ={<Order/>}/>
          <Route />
      </Routes>
        </Api>
    </div>
  );
}

export default Routing;
