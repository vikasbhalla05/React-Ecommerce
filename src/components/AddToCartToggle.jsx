import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCartToggle = ({ amount, setIncrement, setDecrement }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button className="" onClick={() => setDecrement()}>
          <FaMinus />
        </button>
        <p>{amount}</p>
        <button onClick={() => setIncrement()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default AddToCartToggle;
