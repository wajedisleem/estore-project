import styles from './NewArrivalSection.module.css';
import { useSelector } from 'react-redux';
import { ProductSection } from '../components/ProductSection';

const NewArrivalSection = () => {
  const { items } = useSelector((state) => state.products);
  let products = items.filter((item) => item.new).slice(0, 4);

  return (
    <section className={styles['new-arrival-section']}>
      <ProductSection title="Home.NewArrivals" products={products} />
    </section>
  );
};
export { NewArrivalSection };
