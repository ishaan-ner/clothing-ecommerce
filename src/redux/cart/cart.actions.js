import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({ type: CartActionTypes.TOGGLE_CART });

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: item,
});

export const decrementItem = (item) => ({
  type: CartActionTypes.DECREMENT_ITEM,
  payload: item,
});
