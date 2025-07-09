import styles from './ProductList.module.css';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard';
import { ProductLoading } from '../components/ProductLoading';
import { ProductNoResults } from '../components/ProductNoResults';

const ProductList = () => {
  const { filteredItems, loading } = useSelector((state) => state.products);

  if (loading) {
    return (
      <div className={styles['product-list']}>
        {Array.from({ length: 15 }).map((_, index) => (
          <ProductLoading key={index} />
        ))}
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return <ProductNoResults />;
  }

  return (
    <div className={styles['product-list']}>
      {filteredItems.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export { ProductList };
