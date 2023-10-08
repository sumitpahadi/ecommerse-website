import React, { useState } from "react";
import "../Style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import withRouter

function Login() {
  const nav = useNavigate();
  const [data,setdata]=useState()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const token = localStorage.getItem("token");
    console.log("token is " + token);

    axios
      .post("https://ecommerse-5jkm.onrender.com/login", formData)
      .then((response) => {
        if (response.data.msg == null) {
          alert(response.data);
        } else if (response.data.result!==formData.email) {
          setdata(response.data.msg)
       
         
        }
        else {
          nav("/");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <p>{data}</p>

        <button type="submit" className="login-button">
          Login
        </button>
        <br />
        <br />
        <Link to={"/signup"}>
          <button className="sign-button">click here for signup</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;