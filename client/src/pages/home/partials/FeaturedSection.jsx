import styles from './FeaturedSection.module.css';

import { useSelector } from 'react-redux';
import { ProductSection } from '../components/ProductSection';

const FeaturedSection = () => {
  const { items } = useSelector((state) => state.products);
  let products = items.filter((item) => item.featured);

  return (
    <section className={styles['featured-section']}>
      <ProductSection title="Home.FeaturedProducts" products={products} />
    </section>
  );
};

export { FeaturedSection };
