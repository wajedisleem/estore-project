import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './CartPage.module.css';

import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { CartEmpty } from './partials/CartEmpty';
import { CartContent } from './partials/CartContent';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Fragment>
      <FormattedPageTitle id="Cart.Title" />
      <PageContainer>
        <div className={styles['cart-box']}>
          <h1 className={styles['cart-title']}>
            <FormattedMessage id="Cart.Title" />
          </h1>
          {cart.totalItems !== 0 ? <CartContent /> : <CartEmpty />}
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { CartPage };
