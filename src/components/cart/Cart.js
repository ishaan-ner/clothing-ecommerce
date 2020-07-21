import React from "react";
import "./cart.styles.scss";
import CustomButton from "../custom-button/CustomButton";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default Cart;
