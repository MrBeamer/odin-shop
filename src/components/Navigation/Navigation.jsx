import styles from "./Navigation.module.css";
import logoDark from "../../assets/logo-dark.svg";
import { calcTotalQuantity } from "../../utils/helper";
import { NavLink } from "react-router";

export default function Navigation({ onCartClick, cart }) {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${styles.navListLeft}`}>
        <NavLink to="/men" className={styles.navItem}>
          Men
        </NavLink>
        <NavLink to="/women" className={styles.navItem}>
          Women
        </NavLink>
        <NavLink to="/jewelery" className={styles.navItem}>
          Jewelery
        </NavLink>
      </ul>
      <NavLink to="/" className={styles.logoWrapper}>
        <img className={styles.logo} src={logoDark} alt="Sora Logo" />
      </NavLink>
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
