import { Link } from 'react-router-dom';
import styles from './ProductInfo.module.css';
import { useLanguage } from '../../../i18n/TranslationProvider';
import { ProductPrice } from '../../../components/ProductPrice';
import { ProductStock } from '../../../components/ProductStock';

const ProductInfo = ({ product }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className={styles['product-info']}>
      <Link to={`/product/${product._id}`} className={styles['product-link']}>
        <h3 className={styles['product-name']}>{product[`${currentLanguage.code}_name`]}</h3>
      </Link>
      <div className={styles['product-category-price']}>
        <span className={styles['product-category']}>{product[`${currentLanguage.code}_category`]}</span>
        <div className={styles['product-price-stock']}>
          <div className={styles['product-price']}>
            <ProductPrice price={product.price} />
          </div>
          <div className={styles['product-stock']}>
            <ProductStock stock={product.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};
export { ProductInfo };
