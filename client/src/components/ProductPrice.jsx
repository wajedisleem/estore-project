import styles from './ProductPrice.module.css';
import { FormattedMessage } from 'react-intl';

const ProductPrice = ({ price }) => {
  return (
    <div className={styles['product-price']}>
      <span>
        <FormattedMessage id="Product.Currency" />
      </span>
      <span>{price}</span>
    </div>
  );
};
export { ProductPrice };
