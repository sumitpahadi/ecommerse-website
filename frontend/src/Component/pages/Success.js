import React from 'react'
import "../App.css";
import suceess from "../assests/payment-successful-5343612-4475257.png"
function Success() {
  return (
    <div className='success-container'>
        <img src={suceess} alt=""  className="success-image"/>
    </div>
  )
}

export default Success
