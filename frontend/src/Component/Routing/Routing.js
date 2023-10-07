import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Laptop from "../pages/Laptop";
import Accessories from "../pages/Accessories";
import Mobile from "../pages/Mobile";
import Tablet from "../pages/Tablet";
import Api from "../data/Api";
import Product from "../Product/Product";
import Order from "../Add to cart/Order";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Navbar from "../pages/Navbar";
import Footer from "../Footer/Footer";

function Routing() {
  const navigate = useNavigate();

  const shouldShowNavbarAndFooter = () => {
    const currentPath = window.location.pathname;
    return !(currentPath === "/login" || currentPath === "/signup");
  };

  return (
    <div>
      <Api>
        {shouldShowNavbarAndFooter() && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id/:name" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {shouldShowNavbarAndFooter() && <Footer />}
      </Api>
    </div>
  );
}

export default Routing;
