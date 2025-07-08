import styles from './ProductCard.module.css';
import { ProductImage } from '../elements/ProductImage';
import { ProductInfo } from '../elements/ProductInfo';
import { ProductButton } from '../elements/ProductButton';

const ProductCard = ({ product }) => {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card-details']}>
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
      <ProductButton product={product} />
    </div>
  );
};

export { ProductCard };
