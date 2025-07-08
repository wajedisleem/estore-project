import styles from './ProductStock.module.css';
import { FormattedMessage } from 'react-intl';

const ProductStock = ({ stock }) => {

  if (stock > 0 && stock <= 5){
    return (
      <span className={styles['product-stock-only-left']}>
        <FormattedMessage id="Product.OnlyLeft" values={{ stock }} />
      </span>
    );
  }

  if (stock > 5) {
    return (
      <span className={styles['product-stock-available']}>
        <FormattedMessage id="Product.ItemsAvailable" values={{ stock }} />
      </span>
    );
  }

  return null;
}

export { ProductStock };