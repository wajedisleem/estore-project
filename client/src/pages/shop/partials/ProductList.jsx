import styles from './ProductList.module.css';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard';
import { ProductLoading } from '../components/ProductLoading';
import { ProductNoResults } from '../components/ProductNoResults';

const ProductList = () => {
  const { products, loading } = useSelector((state) => state.productSearch);

  if (loading) {
    return (
      <div className={styles['product-list']}>
        {Array.from({ length: 15 }).map((_, index) => (
          <ProductLoading key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <ProductNoResults />;
  }

  return (
    <div className={styles['product-list']}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export { ProductList };
