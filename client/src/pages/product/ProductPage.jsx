import { Fragment, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../store/slices/productDetailsSlice';

import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { ProductImage } from './partials/ProductImage';
import { ProductInfo } from './partials/ProductInfo';
import { ProductRelated } from './partials/ProductRelated';
import { ProductLoading } from './partials/ProductLoading';

import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (error) {
      navigate('/not-found');
    }
  }, [error, navigate]);

  return (
    <Fragment>
      <FormattedPageTitle id="Product.Title" />
      <PageContainer>
        {(loading || !product) && <ProductLoading />}
        {product && !loading && !error && (
          <div className={styles['product-details-page']}>
            <div className={styles['product-details-box']}>
              <ProductImage product={product} />
              <ProductInfo product={product} />
            </div>
            <ProductRelated productId={product._id} />
          </div>
        )}
      </PageContainer>
    </Fragment>
  );
};

export { ProductPage };
