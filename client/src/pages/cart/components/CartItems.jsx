import { useSelector } from 'react-redux';
import styles from './CartItems.module.css';
import { CartItem } from './CartItem';

const CartItems = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className={styles['cart-items']}>
      {items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export { CartItems };
