import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewProducts } from '../../../store/slices/newProductsSlice';
import { ProductSection } from '../components/ProductSection';

import styles from './NewArrivalSection.module.css';

const NewArrivalSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.newProducts.items);

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, [dispatch]);

  return (
    <section className={styles['new-arrival-section']}>
      <ProductSection title="Home.NewArrivals" products={products} />
    </section>
  );
};
export { NewArrivalSection };
