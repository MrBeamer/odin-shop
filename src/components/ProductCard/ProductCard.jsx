import styles from "./ProductCard.module.css";
import { Link } from "react-router";
import general from "../../assets/placeholder.webp";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";
import jewelery from "../../assets/jewelery.jpg";

export default function ProductCard({
  isRounded,
  product,
  onCartAdd,
  imgPlaceholder,
}) {
  /// Look up to use own images not api, needs to replaced when building real shop
  const lookUpSrc = (img = "/") => {
    const src = {
      "/": general,
      women: women,
      men: men,
      jewelery: jewelery,
    };

    return src[img];
  };

  return (
    <Link to="#" className={styles.productCarouselCard} key={product.id}>
      <div className={styles.productImgContainer}>
        <img
          className={`${styles.productImg} ${isRounded ? styles.rounded : styles.sharp}`}
          src={lookUpSrc(imgPlaceholder)}
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
