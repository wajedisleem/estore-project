import styles from './ShoppingButton.module.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const ShoppingButton = () => {
  return (
    <Link to="/shop" className={styles['btn-continue-shopping']}>
      <FormattedMessage id="Shared.ContinueShopping" />
    </Link>
  );
};

export { ShoppingButton };
