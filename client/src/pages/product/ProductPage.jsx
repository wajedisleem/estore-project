import { Fragment, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ProductPage.module.css';

import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { ProductImage } from './partials/ProductImage';
import { ProductInfo } from './partials/ProductInfo';
import { ProductRelated } from './partials/ProductRelated';
import { ProductLoading } from './partials/ProductLoading';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/not-found');
      }
    }
  }, [id, products, navigate]);

  return (
    <Fragment>
      <FormattedPageTitle id="Product.Title" />
      <PageContainer>
        {product ? (
          <div className={styles['product-details-page']}>
            <div className={styles['product-details-box']}>
              <ProductImage product={product} />
              <ProductInfo product={product} />
            </div>
            <ProductRelated product={product} />
          </div>
        ) : (
          <ProductLoading />
        )}
      </PageContainer>
    </Fragment>
  );
};

export { ProductPage };
