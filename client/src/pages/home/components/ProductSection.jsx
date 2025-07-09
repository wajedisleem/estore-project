import styles from './ProductSection.module.css';
import { ProductLoading } from '../../shop/components/ProductLoading';
import { ProductCard } from '../../shop/components/ProductCard';
import { FormattedMessage } from 'react-intl';

const ProductSection = ({ title, products }) => {
  return (
    <div className={styles['product-section']}>
      <h2>
        <FormattedMessage id={title} />
      </h2>
      <div className={styles['product-list']}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {products.length === 0 && Array.from({ length: 4 }).map((_, index) => <ProductLoading key={index} />)}
      </div>
    </div>
  );
};

export { ProductSection };
