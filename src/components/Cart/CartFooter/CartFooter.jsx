import styles from "./CartFooter.module.css";
import { calcTotalPrice } from "../../../utils/helper";
export default function CartFooter({ cart }) {
  return (
    <div className={styles.footer}>
      <div className={styles.totalRow}>
        <div className={styles.totalLabel}>Estimated Total</div>
        <div
          className={styles.totalPrice}
        >{`€ ${calcTotalPrice(cart).toFixed(2)}`}</div>
      </div>
      <button className={styles.checkoutBtn}>Proceed to Checkout</button>
    </div>
  );
}
