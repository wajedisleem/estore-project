import styles from './OrderDetails.module.css';
import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { orderId, orderDate, deliveryDate, totalAmount } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate('/cart');
    }
  }, [location.state, navigate]);

  return (
    <div className={styles['order-details']}>
      <div className={styles['order-details-item']}>
        <span className={styles['order-detail-label']}>
          <FormattedMessage id="Confirmation.OrderDetails.OrderID" />
        </span>
        <span className={styles['order-detail-value']}>{orderId}</span>
      </div>
      <div className={styles['order-details-item']}>
        <span className={styles['order-detail-label']}>
          <FormattedMessage id="Confirmation.OrderDetails.OrderDate" />
        </span>
        <span className={styles['order-detail-value']}>{orderDate}</span>
      </div>
      <div className={styles['order-details-item']}>
        <span className={styles['order-detail-label']}>
          <FormattedMessage id="Confirmation.OrderDetails.DeliveryDate" />
        </span>
        <span className={styles['order-detail-value']}>{deliveryDate}</span>
      </div>
      <div className={styles['order-details-item']}>
        <span className={styles['order-detail-label']}>
          <FormattedMessage id="Confirmation.OrderDetails.PaymentMethod" />
        </span>
        <span className={styles['order-detail-value']}>
          <FormattedMessage id="Confirmation.OrderDetails.CreditCard" />
        </span>
      </div>
      <div className={styles['order-details-item']}>
        <span className={styles['order-detail-label']}>
          <FormattedMessage id="Confirmation.OrderDetails.TotalAmount" />
        </span>
        <span className={styles['order-detail-value']}>
          <span>
            <FormattedMessage id="Product.Currency" />
          </span>
          <span>{totalAmount}</span>
        </span>
      </div>
    </div>
  );
};

export { OrderDetails };
