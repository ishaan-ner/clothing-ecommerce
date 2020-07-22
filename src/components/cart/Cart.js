import React from "react";
import "./cart.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { useHistory } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

const Cart = ({ cartItems, toggleCart }) => {
  const history = useHistory();

  const handleGoToCart = () => {
    toggleCart();
    history.push("/checkout");
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span>Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCart}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
