import { FormattedMessage } from 'react-intl';
import styles from './ProductPriceStock.module.css';
import { ProductPrice } from '../../../components/ProductPrice';
import { ProductStock } from '../../../components/ProductStock';

const ProductPriceStock = ({ price, stock }) => {
  return (
    <div className={styles['product--price-stock']}>
      <div className={styles['product-price']}>
        <ProductPrice price={price} />
      </div>
      <div className={styles['product-stock']}>
        <ProductStock stock={stock} />
      </div>
    </div>
  );
};

export { ProductPriceStock };
