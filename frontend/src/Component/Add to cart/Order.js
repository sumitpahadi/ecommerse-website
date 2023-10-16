import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../Createslice/Slice";
import empty from "../assests/emptycart.webp";
import { loadStripe } from "@stripe/stripe-js";

function Order() {
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  console.log("cart dta is ", select);

  const dispatch = useDispatch();

  // Filter the items based on user_id
  

  const handleIncrement = (index) => {
    dispatch(increment(index));
  };

  const handleDecrement = (index, num) => {
    if (num === 1) {
      dispatch(removeItem(index));
    } else {
      dispatch(decrement(index));
    }
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  const pricecal = (item) => {
   
    return item.price;
  };



  // --------conversion---------

  const cart2 = select.map((item) => ({
    ...item,
    price: parseInt(item.price.replace(/\s/g, "").replace(/[^\d]/g, ""), 10)
      .toString()
      .slice(2, 10),
  }));
  // -----------------------------final---------------------------
  const cart3 = cart2.map((item) => ({
    ...item,
    price: parseInt(item.price),
  }));
  console.log("item in cart", cart3);


  // -------------new--------
  const filteredItems = cart3.filter((item) => item.user_id === userid);


  const totalQuantity = filteredItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = filteredItems.reduce(
    (total, item) => total +(item.price) * item.quantity,
    0
  );
  // ------------------payment gateway--------------------

  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51O1PDfSDn9Jvh8C8qUZncvrWSZahMESF3FeF4obkKuNq1rplszqkwgM38wkPeSTU2BAqUI1IoMD23sszROBAeWoU00ZTXXLMoJ"
    );

    const body = {
      products: cart3,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://ecommerse-5jkm.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="parent-cont">
      <div className="child-cont">
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="container">
              <div className="first-cont">
                <img src={item.image} alt="click here" height={"200px"} />
              </div>
              <div className="second-cont">
                <p>Brand-Name: {item.name}</p>
              
                <p>Brand-Price: ₹{item.price}</p>
                <div>
                  <button
                    className="button"
                    onClick={() => handleDecrement(item.id, item.quantity)}
                  >
                    -
                  </button>
                  <h4 className="value">{item.quantity}</h4>
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
          <div className="no-items-message">
            <div className="empty-cart">
              <img src={empty} alt="Empty Cart" />
              <p>Cart is Empty</p>
            </div>
          </div>
        )}
      </div>
      {filteredItems.length > 0 && (
        <div className="amount">
          <table>
            <tbody>
              <tr>
                <th>
                  <h2>Price Detail</h2>
                </th>
              </tr>
              <tr>
                <th>Number Of Item</th>
                <th>Brand Name</th>
                <th>Price</th>
              </tr>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    No of item ({item.quantity})
                    <br />
                  </td>
                  <td>{item.name.slice(0, 8)}...</td>
                  <td>₹{(item.price) * item.quantity}</td>
                </tr>
              ))}

              <tr>
                <td colSpan={"2"}>Total Amount :</td>
                <td> ₹{totalAmount}</td>
              </tr>
            </tbody>
          </table>

          <button onClick={makepayment}>Place your order</button>
        </div>
      )}
    </div>
  );
}

export default Order;
