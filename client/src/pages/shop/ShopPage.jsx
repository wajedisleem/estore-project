import { Fragment } from 'react';
import styles from './ShopPage.module.css';

import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { ShopHeader } from './partials/ShopHeader';
import { FilterSection } from './partials/FilterSection';
import { ProductList } from './partials/ProductList';

const ShopPage = () => {
  return (
    <Fragment>
      <FormattedPageTitle id="Shop.Title" />
      <PageContainer>
        <div className={styles['shop-box']}>
          <ShopHeader />
          <FilterSection />
          <ProductList />
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { ShopPage };
