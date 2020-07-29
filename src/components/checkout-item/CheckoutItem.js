import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeFromCart,
  decrementItem,
  addToCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  removeFromCart,
  incrementItem,
  decrementItem,
}) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => incrementItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  incrementItem: (item) => dispatch(addToCart(item)),
  decrementItem: (item) => dispatch(decrementItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
