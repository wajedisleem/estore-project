import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './ProductBreadcrumb.module.css';

const ProductBreadcrumb = ({ category, displayCategory }) => {
  return (
    <div className={styles['product-breadcrumb']}>
      <Link to="/" className={styles['product-breadcrumb-link']}>
        <FormattedMessage id="Product.Home" />
      </Link>
      <span>/</span>
      <Link to="/shop" className={styles['product-breadcrumb-link']}>
        <FormattedMessage id="Product.Shop" />
      </Link>
      <span>/</span>
      <Link to={`/shop/${category.toLowerCase()}`} className={styles['product-breadcrumb-link']}>
        {displayCategory}
      </Link>
    </div>
  );
};
export { ProductBreadcrumb };
