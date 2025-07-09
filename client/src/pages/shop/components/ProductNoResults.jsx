import styles from './ProductNoResults.module.css';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const ProductNoResults = () => {
  const dispatch = useDispatch();

  const handelClearFilters = () => {
    //dispatch(clearFilters());
  };

  return (
    <div className={styles['product-no-results']}>
      <img src="/images/icons/no-results.svg" className={styles['product-no-results-image']} alt="Product No Results" />
      <h2 className={styles['product-no-results-text']}>
        <FormattedMessage id="Shop.NoProductsFound" />
      </h2>
      <button className={styles['btn-clear-filters']} onClick={handelClearFilters}>
        <FormattedMessage id="Shop.ClearFilters" />
      </button>
    </div>
  );
};

export { ProductNoResults };
