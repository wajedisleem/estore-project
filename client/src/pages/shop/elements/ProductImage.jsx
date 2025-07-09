import { Link } from 'react-router-dom';
import { ProductBadge } from './ProductBadge';

import styles from './ProductImage.module.css';

const ProductImage = ({ product }) => {
  return (
    <div className={styles['product-image-box']}>
      <Link to={`/product/${product._id}`}>
        <img src={`${product.image}?w=350`} className={styles['product-image']} alt={product.name} />
      </Link>
      <ProductBadge product={product} />
    </div>
  );
};

export { ProductImage };
