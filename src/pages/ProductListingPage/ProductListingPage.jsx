import styles from "./ProductListingPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../utils/useProducts";
import { useParams } from "react-router";

export default function ProductListingPage({ onCartAdd }) {
  const { data, isLoading, error } = useProducts();

  let { category } = useParams();
  /// Also this lookup is only here, because of the shitty api output will be removed, when shop will be updated
  const lookup = (value) => {
    const clearCategory = {
      women: "women's clothing",
      men: "men's clothing",
      jewelery: "jewelery",
    };

    return clearCategory[value];
  };

  const lookUpCategory = lookup(category);

  /// Dynamically supports the component with content based on useParam output
  const categoryContent = {
    women: {
      headline: "Women",
      description:
        "Discover our latest fashion for women. We offer elegant dresses, luxury knitwear, stylish outerwear – everything for a sophisticated wardrobe. Our collection combines timeless design with modern trends.",
    },
    men: {
      headline: "Men",
      description:
        "Discover our latest fashion for men. We offer premium clothing, luxury footwear, and refined accessories – everything for a timeless wardrobe. Our collection combines modern style with lasting elegance.",
    },
    jewelery: {
      headline: "Jewelry",
      description:
        "Discover our luxury jewelry collection. We offer elegant necklaces, bracelets, rings, and earrings – perfect for every occasion. Our jewelry combines timeless beauty with exceptional craftsmanship.",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.headline}>
          {categoryContent[category]?.headline}
        </h2>
        <p className={styles.description}>
          {categoryContent[category]?.description}
        </p>
      </div>
      <div className={styles.productListingGrid}>
        {data
          ?.filter((element) => element.category === lookUpCategory)
          ?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onCartAdd={onCartAdd}
                isRounded={false}
                imgPlaceholder={category}
              />
            );
          })}
      </div>
    </div>
  );
}
