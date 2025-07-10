import { FormattedMessage } from 'react-intl';
import styles from './CartLoading.module.css';

const CartLoading = () => {
  return (
    <div className={styles['cart-loading-box']}>
      <div className={styles['lds-ripple']}>
        <div></div>
        <div></div>
      </div>
      <span className={styles['cart-loading-text']}>
        <FormattedMessage id="Cart.Loading" />
      </span>
    </div>
  );
};

export { CartLoading };
