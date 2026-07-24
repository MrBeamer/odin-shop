import styles from "./CartItem.module.css";
export default function CartItem({
  product,
  onRemove,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imgContainer}>
        <img
          className={styles.productImg}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div>
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.productPrice}>{`€ ${product.price}`}</p>
        <p className={styles.productCategory}>{product.category}</p>
        <div className={styles.cartItemControls}>
          <div className={styles.quantityControls}>
            <button
              className={styles.btnDecrease}
              onClick={() => onDecrease(product)}
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              className={styles.btnIncrease}
              onClick={() => onIncrease(product)}
            >
              +
            </button>
          </div>
          <button
            className={styles.btnRemove}
            onClick={() => onRemove(product)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
