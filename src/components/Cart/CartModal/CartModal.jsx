import { useEffect, useRef } from "react";
import styles from "../CartModal/CartModal.module.css";
import CartFooter from "../CartFooter/CartFooter";
import { calcTotalQuantity } from "../../../utils/helper";
import PaymentMethods from "../../PaymentMethods/PaymentMethods";

export default function CartModal({ open, onClose, children, cart }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
      //Locks in Body so that you can not scroll
      document.body.style.overflow = "hidden";
    } else {
      dialogRef.current?.close();
      //Removes the scroll lock
      document.body.style.overflow = "";
    }
  }, [open]);
  return (
    <dialog id={styles.cartModal} ref={dialogRef} onClose={onClose}>
      <div className={styles.modalFlexWrapper}>
        <div className={styles.cartHeader}>
          <p>{`Shopping Bag (${calcTotalQuantity(cart)})`}</p>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>

        <div className={styles.cartNotification}>
          Your order qualifies for free shipping.
        </div>

        {children}
        <CartFooter cart={cart} />
        <div className={styles.paymentMethods}>
          <PaymentMethods />
        </div>
      </div>
    </dialog>
  );
}
