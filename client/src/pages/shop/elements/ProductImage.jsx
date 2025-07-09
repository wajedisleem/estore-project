import { Link } from 'react-router-dom';
import styles from './ProductImage.module.css';
import { ProductBadge } from './ProductBadge';

const ProductImage = ({ product }) => {
  return (
    <div className={styles['product-image-box']}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className={styles['product-image']} alt={product.name} />
      </Link>
      <ProductBadge product={product} />
    </div>
  );
};

export { ProductImage };
