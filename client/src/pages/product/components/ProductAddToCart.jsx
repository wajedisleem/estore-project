import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styles from './ProductAddToCart.module.css';
import { addProductToCart, removeProductFromCart, updateProductInCart } from '../../../store/slices/cartSlice';

const ProductAddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartProduct = cart.items.filter((item) => item._id === product._id)[0];

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(cartProduct ? cartProduct.quantity : 1);
  }, [cartProduct]);

  const handleQuantityDecrement = () => {
    if (quantity <= 1) {
      dispatch(removeProductFromCart(product._id));
      return;
    }
    setQuantity(quantity - 1);
    if (cartProduct) {
      dispatch(updateProductInCart({ productId: product._id, quantity: quantity - 1 }));
    }
  };

  const handleQuantityIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
      dispatch(updateProductInCart({ productId: product._id, quantity: quantity + 1 }));
    }
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart({ productId: product._id, quantity }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(product._id));
  };

  if (product.stock === 0) {
    return (
      <div className={styles['add-to-cart-section']}>
        <span className={styles['out-of-stock']}>
          <FormattedMessage id="Product.OutOfStock" />
        </span>
      </div>
    );
  }

  return (
    <div className={styles['add-to-cart-section']}>
      <div className={styles['product-quantity']}>
        <button onClick={handleQuantityDecrement} className={styles['btn-product-quantity']}>
          -
        </button>
        <span className={styles['product-quantity-value']}>{quantity}</span>
        <button onClick={handleQuantityIncrement} className={styles['btn-product-quantity']} disabled={quantity >= product.stock}>
          +
        </button>
      </div>
      {cartProduct ? (
        <div className={styles['added-to-cart']}>
          <span className={styles['added-to-cart-label']}>
            <img src="/images/icons/check.svg" alt="Added to cart" />
            <FormattedMessage id="Product.AddedToCart" />
          </span>
          <button className={styles['btn-remove-from-cart']} onClick={handleRemoveFromCart}>
            <img src="/images/icons/cart-remove.svg" alt="Remove from cart" />
          </button>
        </div>
      ) : (
        <button className={styles['btn-add-to-cart']} onClick={handleAddToCart}>
          <img src="/images/icons/cart-add.svg" alt="Add to cart" />
          <FormattedMessage id="Product.AddToCart" />
        </button>
      )}
    </div>
  );
};

export { ProductAddToCart };
