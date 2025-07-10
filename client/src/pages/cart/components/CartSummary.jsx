import { useState } from 'react';
import styles from './CartSummary.module.css';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { generateOrderId, getOrderDate, getDeliveryDate } from '../../../utils/OrderInfo';
import { clearCart } from '../../../store/slices/cartSlice';

const CartSummary = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { totalItems, subTotal, shipping, tax, totalPrice } = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);

  const handlePlaceOrderClick = () => {
    if (totalItems === 0) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      navigate('/confirmation', {
        state: {
          orderId: generateOrderId(),
          orderDate: getOrderDate(),
          deliveryDate: getDeliveryDate(),
          totalAmount: totalPrice
        }
      });

      //dispatch(updateProductsStock(cart.items));
      dispatch(clearCart());
    }, 2000);
  };

  return (
    <div className={styles['cart-summary']}>
      <h2 className={styles['cart-summary-title']}>
        <FormattedMessage id="Cart.Summary.Title" />
      </h2>
      <div className={styles['cart-summary-subtotal']}>
        <div className={styles['cart-summary-row']}>
          <span className={styles['cart-summary-row-text']}>
            <FormattedMessage id="Cart.Summary.Subtotal" />
          </span>
          <span className={styles['cart-summary-row-amount']}>
            <span>
              <FormattedMessage id="Product.Currency" />
            </span>
            <span>{subTotal}</span>
          </span>
        </div>
        <div className={styles['cart-summary-row']}>
          <span className={styles['cart-summary-row-text']}>
            <FormattedMessage id="Cart.Summary.Shipping" />
          </span>
          <span className={styles['cart-summary-row-amount']}>
            {shipping === 0 ? (
              <span className={styles['cart-summary-free-shipping']}>
                <FormattedMessage id="Cart.Summary.FreeShipping" />
              </span>
            ) : (
              <>
                <span>
                  <FormattedMessage id="Product.Currency" />
                </span>
                <span>{shipping}</span>
              </>
            )}
          </span>
        </div>
        <div className={styles['cart-summary-row']}>
          <span className={styles['cart-summary-row-text']}>
            <FormattedMessage id="Cart.Summary.Tax" />
            <span className={styles['cart-summary-tax-percentage']}> (5%)</span>
          </span>
          <span className={styles['cart-summary-row-amount']}>
            <span>
              <FormattedMessage id="Product.Currency" />
            </span>
            <span>{tax}</span>
          </span>
        </div>
        <hr className={styles['cart-summary-divider']} />
      </div>

      <div className={styles['cart-summary-total']}>
        <span className={styles['cart-summary-total-text']}>
          <FormattedMessage id="Cart.Summary.Total" />
        </span>
        <span className={styles['cart-summary-total-amount']}>
          <span>
            <FormattedMessage id="Product.Currency" />
          </span>
          <span>{totalPrice}</span>
        </span>
      </div>
      <a onClick={handlePlaceOrderClick} className={styles['btn-place-order']}>
        {!loading && <FormattedMessage id="Cart.Summary.PlaceOrder" />}
        {loading && <FormattedMessage id="Cart.Summary.PlacingOrder" />}
      </a>
    </div>
  );
};

export { CartSummary };
