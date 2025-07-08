import { Fragment } from 'react';
import styles from './ConfirmationPage.module.css';

import { FormattedPageTitle } from '../../components/PageTitle';
import { PageContainer } from '../../components/PageContainer';

import { ConfirmationHeader } from './components/ConfirmationHeader';
import { OrderDetails } from './components/OrderDetails';
import { ShoppingButton } from '../../components/ShoppingButton';

const ConfirmationPage = () => {
  return (
    <Fragment>
      <FormattedPageTitle id="Confirmation.Title" />
      <PageContainer>
        <div className={styles['confirmation-box']}>
          <ConfirmationHeader />
          <OrderDetails />
          <ShoppingButton />
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { ConfirmationPage };
