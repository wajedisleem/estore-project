import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSearchSlice';

import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { ShopHeader } from './partials/ShopHeader';
import { FilterSection } from './partials/FilterSection';
import { ProductList } from './partials/ProductList';

import styles from './ShopPage.module.css';
import { useLanguage } from '../../i18n/TranslationProvider';

const ShopPage = () => {
  const { currentLanguage } = useLanguage();
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.productSearch);

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, filters, currentLanguage]);

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
