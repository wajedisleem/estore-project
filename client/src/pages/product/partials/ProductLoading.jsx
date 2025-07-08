import { FormattedMessage } from 'react-intl';
import styles from './ProductLoading.module.css';

const ProductLoading = () => {
  return (
    <div className={styles['product-loading-box']}>
      <div className={styles['lds-ripple']}>
        <div></div>
        <div></div>
      </div>
      <span className={styles['product-loading-text']}>
        <FormattedMessage id="Product.Loading" />
      </span>
    </div>
  );
};

export { ProductLoading };
