import styles from './CartEmpty.module.css';
import { FormattedMessage } from 'react-intl';
import { ShoppingButton } from '../../../components/ShoppingButton';

const CartEmpty = () => {
  return (
    <div className={styles['cart-empty']}>
      <img src="/images/icons/cart-empty.svg" className={styles['cart-empty-image']} alt="Cart Empty" />
      <p className={styles['cart-empty-text']}>
        <FormattedMessage id="Cart.Empty.Message" />
      </p>
      <ShoppingButton />
    </div>
  );
};

export { CartEmpty };
