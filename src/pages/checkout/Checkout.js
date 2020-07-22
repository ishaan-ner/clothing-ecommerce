import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = ({ cartItems }) => {
  const calculateTotal = (cartItems) => {
    const cartTotal = cartItems
      .map((item) => item.price * item.quantity)
      .reduce((a, b) => a + b, 0);
    return cartTotal;
  };
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="total">
        <span>TOTAL: ${calculateTotal(cartItems)}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Checkout);
