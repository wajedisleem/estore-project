import styles from './ProductBadge.module.css';
import { FormattedMessage } from 'react-intl';
import { Badge } from '../../../components/Badge';

const ProductBadge = ({ product }) => {
  if (product.offer) {
    return (
      <span className={styles['product-badge']}>
        <Badge type="offer">
          <FormattedMessage id="Product.Save" />
          <span>20%</span>
        </Badge>
      </span>
    );
  }

  if (product.new) {
    return (
      <span className={styles['product-badge']}>
        <Badge type="new">
          <FormattedMessage id="Product.New" />
        </Badge>
      </span>
    );
  }

  if (product.featured) {
    return (
      <span className={styles['product-badge']}>
        <Badge type="featured">
          <FormattedMessage id="Product.Featured" />
        </Badge>
      </span>
    );
  }

  return null;
};

export { ProductBadge };
