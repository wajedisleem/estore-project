import { useSelector } from 'react-redux';
import styles from './CartItems.module.css';
import { CartItem } from './CartItem';

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles['cart-items']}>
      {cart.items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export { CartItems };
