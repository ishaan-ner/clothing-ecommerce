import { CartActionTypes } from "./cart.types";
import { addItemToCart, decrementItem } from "./cart.utils";

const INITIAL_STATE = { cartOpen: false, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return { ...state, cartOpen: !state.cartOpen };

    case CartActionTypes.ADD_TO_CART:
      let newCart = addItemToCart(state.cartItems, action.payload);
      return { ...state, cartItems: newCart };

    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case CartActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        cartItems: decrementItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
