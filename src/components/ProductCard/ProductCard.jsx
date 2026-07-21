import styles from "./ProductCard.module.css";
import { Link } from "react-router";
import placeholder from "../../assets/placeholder.webp";

export default function ProductCard({ product, onCartAdd }) {
  return (
    <Link to="#" className={styles.productCarouselCard} key={product.id}>
      <div className={styles.productImgContainer}>
        <img
          className={styles.productImg}
          src={placeholder}
          alt="Product Name"
        />
        <button
          className={styles.addToCartBtn}
          onClick={() => {
            onCartAdd(product);
          }}
        >
          <i className="fa-light fa-plus"></i>
        </button>
      </div>
      <p className={styles.productTitle}>{product.title}</p>
      <p className={styles.productCategory}> {product.category}</p>
      <p className={styles.productPrice}> {`€ ${product.price.toFixed(2)}`}</p>
    </Link>
  );
}
