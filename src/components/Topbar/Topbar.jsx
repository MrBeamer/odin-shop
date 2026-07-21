import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <p className={styles.message}>
        {" "}
        GET A FREE 50€ GIFTCARD FOR ORDERS OVER 250€
      </p>
    </div>
  );
}
