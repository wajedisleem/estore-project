import styles from './CartItem.module.css';

import { useDispatch } from 'react-redux';
import { useLanguage } from '../../../i18n/TranslationProvider';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { TrushIcon } from '../../../components/icons/TrushIcon';
import { removeProductFromCart, updateProductInCart } from '../../../store/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { currentLanguage } = useLanguage();

  const handleQuantityDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeProductFromCart(item.product_id));
      return;
    }

    dispatch(updateProductInCart({ productId: item.product_id, quantity: item.quantity - 1 }));
  };

  const handleQuantityIncrement = (item) => {
    if (item.quantity >= item.stock) {
      return;
    }
    dispatch(updateProductInCart({ productId: item.product_id, quantity: item.quantity + 1 }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeProductFromCart(itemId));
  };

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item-image-box']}>
        <img src={`${item.image}?w=350`} className={styles['cart-item-image']} alt={item.name} />
      </div>
      <div className={styles['cart-item-info']}>
        <Link to={`/product/${item.product_id}`} className={styles['cart-item-name']}>
          <h2>{item[`${currentLanguage.code}_name`]}</h2>
        </Link>
        <div className={styles['cart-item-info-details']}>
          <div>
            <p className={styles['cart-item-category']}>{item[`${currentLanguage.code}_category`]}</p>
            <p className={styles['cart-item-price']}>
              <span>
                <FormattedMessage id="Product.Currency" />
              </span>
              <span>{item.price}</span>
            </p>
          </div>
          <div className={styles['cart-item-options']}>
            <div className={styles['cart-item-quantity']}>
              <button onClick={() => handleQuantityDecrement(item)} className={styles['btn-cart-item-quantity']}>
                -
              </button>
              <span className={styles['cart-item-quantity-value']}>{item.quantity}</span>
              <button onClick={() => handleQuantityIncrement(item)} className={styles['btn-cart-item-quantity']}>
                +
              </button>
            </div>
            <button className={styles['btn-cart-item-remove']} onClick={() => handleRemoveItem(item.product_id)} aria-label={<FormattedMessage id="Cart.Item.Remove" />}>
              <TrushIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
