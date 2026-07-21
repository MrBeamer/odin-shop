import styles from "./Navigation.module.css";
import logoDark from "../../assets/logo-dark.svg";
import { calcTotalQuantity } from "../../utils/helper";

export default function Navigation({ onCartClick, cart }) {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${styles.navListLeft}`}>
        <li className={styles.navItem}>New Arrivals</li>
        <li className={styles.navItem}>Highlights</li>
        <li className={styles.navItem}>Men</li>
        <li className={styles.navItem}>Women</li>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
      </ul>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logoDark} alt="Sora Logo" />
      </div>
      <ul className={`${styles.navList} ${styles.navListRight}`}>
        <li>
          <i className="fa-brands fa-sistrix"></i>
        </li>
        <li>
          <i className="fa-solid fa-circle-user"></i>
        </li>
        <li className={styles.shoppingCart} onClick={onCartClick}>
          <i className="fa-solid fa-bag-shopping"></i>
          {calcTotalQuantity(cart)}
        </li>
      </ul>
    </nav>
  );
}
