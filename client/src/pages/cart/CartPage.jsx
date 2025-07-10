import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './CartPage.module.css';

import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { CartLoading } from './partials/CartLoading';
import { CartEmpty } from './partials/CartEmpty';
import { CartContent } from './partials/CartContent';

const CartPage = () => {
  const { totalItems, loading } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <FormattedPageTitle id="Cart.Title" />
      <PageContainer>
        <div className={styles['cart-box']}>
          <h1 className={styles['cart-title']}>
            <FormattedMessage id="Cart.Title" />
          </h1>
          {loading && <CartLoading />}
          {!loading && totalItems === 0 && <CartEmpty />}
          {!loading && totalItems > 0 && <CartContent />}
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { CartPage };
