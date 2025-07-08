import styles from './ProductRelated.module.css';
import { useSelector } from 'react-redux';
import { ProductSection } from '../../home/components/ProductSection';

const ProductRelated = ({ product }) => {
  const { items } = useSelector((state) => state.products);
  let products = items.filter((item) => item.en_category === product.en_category && item.id !== product.id).slice(0, 4);

  return (
    <div className={styles['product-related']}>
      <ProductSection title="Product.RelatedProducts" products={products} />
    </div>
  );
};
export { ProductRelated };
