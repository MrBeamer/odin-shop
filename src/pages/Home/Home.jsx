import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { useProducts } from "../../utils/useProducts";

export default function Home({ onCartAdd }) {
  const { data, isLoading, error } = useProducts();

  return (
    <>
      <Hero />
      <ProductCarousel products={data} onCartAdd={onCartAdd} />
      <Newsletter />
    </>
  );
}
