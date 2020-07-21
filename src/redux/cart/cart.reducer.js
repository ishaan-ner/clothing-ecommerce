import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = { cartOpen: false, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return { ...state, cartOpen: !state.cartOpen };

    case CartActionTypes.ADD_TO_CART:
      let newCart = addItemToCart(state.cartItems, action.payload);
      return { ...state, cartItems: newCart };

    default:
      return state;
  }
};

export default cartReducer;
