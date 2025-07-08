import { FormattedMessage } from 'react-intl';
import styles from './HomeLoading.module.css';

const HomeLoading = () => {
  return (
    <div className={styles['product-loading-box']}>
      <div className={styles['lds-ripple']}>
        <div></div>
        <div></div>
      </div>
      <span className={styles['product-loading-text']}>
        <FormattedMessage id="Home.Loading" />
      </span>
    </div>
  );
};

export { HomeLoading };
