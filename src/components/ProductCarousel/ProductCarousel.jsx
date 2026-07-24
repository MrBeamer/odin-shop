import styles from "./ProductCarousel.module.css";
import ProductCard from "../ProductCard/ProductCard";
export default function ProductCarousel({ products, onCartAdd }) {
  return (
    <div className={styles.productCarouselContainer}>
      <h3 className={styles.productCarouselSubtitle}>New Release</h3>
      <h2 className={styles.productCarouselTitle}>The Nami Collection</h2>
      <div className={styles.productCarouselGrid}>
        {products?.slice(0, 4)?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onCartAdd={onCartAdd}
              isRounded={true}
            />
          );
        })}
      </div>
    </div>
  );
}
