import styles from './ProductInfo.module.css';

import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import { ProductRating } from '../components/ProductRating';
import { ProductName } from '../components/ProductName';
import { ProductCategory } from '../components/ProductCategory';
import { ProductPriceStock } from '../components/ProductPriceStock';
import { ProductDescription } from '../components/ProductDescription';
import { ProductAddToCart } from '../components/ProductAddToCart';
import { useLanguage } from '../../../i18n/TranslationProvider';

const ProductInfo = ({ product }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className={styles['product-info']}>
      <ProductBreadcrumb category={product.en_category} displayCategory={product[`${currentLanguage.code}_category`]} />
      <div>
        <ProductName name={product[`${currentLanguage.code}_name`]} />
        <ProductCategory category={product[`${currentLanguage.code}_category`]} />
      </div>
      <ProductRating rating={product.rating} reviews={product.reviews} />
      <ProductPriceStock price={product.price} stock={product.stock} />
      <ProductAddToCart product={product} />
      <ProductDescription description={product[`${currentLanguage.code}_description`]} />
    </div>
  );
};

export { ProductInfo };
