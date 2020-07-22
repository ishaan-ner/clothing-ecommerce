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

export const decrementItem = (cart, item) => {
  if (item.quantity === 1) return [...cart];
  return cart.map((e) =>
    e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e
  );
};
