import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../Createslice/Slice";

function Order() {
  const select = useSelector((state) => state.cart.data);
  const dispatch = useDispatch(); // Initialize dispatch

  const handleIncrement = (index) => {
    dispatch(increment(index));
    console.log(index);
  };

  const handleDecrement = (index, num) => {
    if (num === 1) {
      dispatch(removeItem(index));
    }
    dispatch(decrement(index));
    console.log(index);
  };

  const handleRemove = (index) => {
    console.log("Removing item with id:", index);
    dispatch(removeItem(index));
  };

  const pricecal = (item) => {
    const cleanedPrice = item.replace(/\s/g, "").replace(/[^\d]/g, "");
    const price = parseInt(cleanedPrice, 10);
    return price;
  };

  const totalAmount = select.reduce((total, item) => total + pricecal(item.price) * item.quantity, 0);

  return (
    <div className="parent-cont">
      <div className="child-cont">
        {select && select.length > 0 ? (
          select.map((item, index) => (
            <div key={index} className="container">
              <div className="first-cont">
                <img src={item.image} alt="click here" height={"200px"} />
              </div>
              <div className="second-cont">
                <p>Brand-Name: {item.name}</p>
                <p>Brand-Price: {item.price}</p>
                <div>
                  <button
                    className="button"
                    onClick={() => handleDecrement(item.id, item.quantity)}
                  >
                    -
                  </button>
                  <h4>{item.quantity}</h4>
                  <button
                    className="button"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="remove">
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-items-message"><p>No Item in Cart</p></div>
        )}
      </div>
      {select.length > 0 && (
        <div className="amount">
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
              {select.map((item, index) => (
                <tr key={index}>
                  <td><b>Brand  :   </b>{item.name.slice(0, 8)}...</td>
                  <td>₹{pricecal(item.price)}</td>
                </tr>
              ))}
              <tr>
                <td>Total Amount</td>
                <td> ₹{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Order;
