const calcTotalQuantity = (cartItems) => {
  return cartItems.reduce((acc, product) => acc + product.quantity, 0);
};

const calcTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
};
export { calcTotalQuantity, calcTotalPrice };
