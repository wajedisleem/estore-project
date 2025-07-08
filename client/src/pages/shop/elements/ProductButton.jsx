import styles from './ProductButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store/slices/cartSlice';
import { FormattedMessage } from 'react-intl';

const ProductButton = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartProduct = cart.items.filter((item) => item.id === product.id)[0];

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  }
  
  if (product.stock === 0) {
    return (
      <span className={styles['out-of-stock']}>
        <FormattedMessage id="Product.OutOfStock" />
      </span>
    );
  }

  if (cartProduct) {
    return (
      <div className={styles['added-to-cart']}>
        <span className={styles['added-to-cart-label']}>
          <img src="/images/icons/check.svg" alt="Added to cart" />
          <FormattedMessage id="Product.AddedToCart" />
        </span>
        <button className={styles['btn-remove-from-cart']} onClick={handleRemoveFromCart}>
          <img src="/images/icons/cart-remove.svg" alt="Remove from cart" />
        </button>
      </div>
    );
  }

  return (
    <button className={styles['btn-add-to-cart']} onClick={handleAddToCart}>
      <img src="/images/icons/cart-add.svg" alt="Add to cart" />
      <FormattedMessage id="Product.AddToCart" />
    </button>
  );
};
export { ProductButton };
