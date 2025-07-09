import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFeaturedProducts } from '../../../store/slices/featuredProductsSlice';
import { ProductSection } from '../components/ProductSection';

import styles from './FeaturedSection.module.css';

const FeaturedSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.featuredProducts.products);

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  return (
    <section className={styles['featured-section']}>
      <ProductSection title="Home.FeaturedProducts" products={products} />
    </section>
  );
};

export { FeaturedSection };
