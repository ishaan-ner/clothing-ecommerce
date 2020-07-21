export const addItemToCart = (cart, item) => {
  let itemExists = cart.find((cartItem) => cartItem.id === item.id);
  if (itemExists) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};
