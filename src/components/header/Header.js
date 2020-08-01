import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import Cart from "../cart/Cart";

const Header = ({ currentUser, isCartOpen }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <span>
          <i class="fas fa-laptop"></i>
        </span>
        <span className="home-button">SimplyElectronics</span>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        {} <CartIcon />
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isCartOpen: state.cart.cartOpen,
});

export default connect(mapStateToProps)(Header);
