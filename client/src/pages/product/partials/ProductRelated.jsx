import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRelatedProducts } from '../../../store/slices/relatedProductsSlice';
import { ProductSection } from '../../home/components/ProductSection';

import styles from './ProductRelated.module.css';

const ProductRelated = ({ productId }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.relatedProducts.products);

  useEffect(() => {
    dispatch(fetchRelatedProducts(productId));
  }, [dispatch, productId]);

  return (
    <div className={styles['product-related']}>
      <ProductSection title="Product.RelatedProducts" products={products} />
    </div>
  );
};
export { ProductRelated };
