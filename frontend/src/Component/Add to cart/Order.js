import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Createslice/Slice";
import { removeItem } from "../Createslice/Slice";

function Order() {
  const select = useSelector((state) => state.cart.data);
  const dispatch = useDispatch(); // Initialize dispatch

  const handleIncrement = (index) => {
    dispatch(increment(index));
    console.log(index);
  };
  const handledecerment = (index, num) => {
    if (num === 1) {
      dispatch(removeItem(index));
    }
    dispatch(decrement(index));
    console.log(index);
  };

  const handleremove = (index) => {
    console.log("Removing item with id:", index);
    dispatch(removeItem(index));
  };

  return (
    <div className="parent-cont">
      {select &&
        select.map((item, index) => {
          return (
            <div key={index} className="child-cont">
              <div className="first-cont">
                <img src={item.image} alt="click here" height={"200px"} />
              </div>
              <div className="second-cont">
                <p>Brand-Name: {item.name}</p>
                <p>Brand-Price: {item.price}</p>
                <div>
                  <button
                    className="button"
                    onClick={() => handledecerment(item.id, item.quantity)}
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
                  <button onClick={() => handleremove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Order;
