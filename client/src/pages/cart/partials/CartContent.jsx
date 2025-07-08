import styles from './CartContent.module.css';
import { CartItems } from '../components/CartItems';
import { CartSummary } from '../components/CartSummary';

const CartContent = () => {
  return (
    <div className={styles['cart-box']}>
      <CartItems />
      <CartSummary />
    </div>
  );
};

export { CartContent };
