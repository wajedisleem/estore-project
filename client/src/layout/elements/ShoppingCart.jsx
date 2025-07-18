import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { fetchCart } from '../../store/slices/cartSlice';

import styles from './ShoppingCart.module.css';
import { useAuth } from '../../auth/AuthProvider';

const ShoppingCart = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  const { totalItems, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [currentUser, dispatch]);

  return (
    <Link to="/cart" className={`${styles['header-cart']} ${location.pathname === '/cart' && styles['header-cart-active']}`}>
      <div className={styles['header-cart-count']}>
        <img src="/images/icons/cart.svg" className={styles['header-cart-count-icon']} alt="Shopping Cart" />
        <span className={styles['header-cart-count-badge']}>{totalItems}</span>
      </div>
      <div className={styles['header-cart-total']}>
        <span className={styles['header-cart-total-text']}>
          <FormattedMessage id="Layout.Total" />
        </span>
        <span className={styles['header-cart-total-price']}>
          <FormattedMessage id="Product.Currency" />
          <span>{totalAmount}</span>
        </span>
      </div>
    </Link>
  );
};

export { ShoppingCart };
