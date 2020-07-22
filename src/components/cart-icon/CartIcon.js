import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCart, cartItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0)}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
