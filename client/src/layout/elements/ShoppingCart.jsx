import styles from './ShoppingCart.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  return (
    <Link to="/cart" className={`${styles['header-cart']} ${location.pathname === '/cart' && styles['header-cart-active']}`}>
      <div className={styles['header-cart-count']}>
        <img src="/images/icons/cart.svg" className={styles['header-cart-count-icon']} alt="Shopping Cart" />
        <span className={styles['header-cart-count-badge']}>{cart.totalItems}</span>
      </div>
      <div className={styles['header-cart-total']}>
        <span className={styles['header-cart-total-text']}>
          <FormattedMessage id="Layout.Total" />
        </span>
        <span className={styles['header-cart-total-price']}>
          <FormattedMessage id="Product.Currency" />
          <span>{cart.totalPrice}</span>
        </span>
      </div>
    </Link>
  );
};

export { ShoppingCart };
