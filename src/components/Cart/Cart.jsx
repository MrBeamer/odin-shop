import CartModal from "./CartModal/CartModal";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";

export default function Cart({
  cart,
  open,
  onClose,
  onRemove,
  onDecrease,
  onIncrease,
}) {
  return (
    <CartModal open={open} onClose={onClose} cart={cart}>
      <div className={styles.cartList}>
        {cart.length > 0 ? (
          cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
              />
            );
          })
        ) : (
          <p>Your Shopping Cart is empty.</p>
        )}
      </div>
    </CartModal>
  );
}
