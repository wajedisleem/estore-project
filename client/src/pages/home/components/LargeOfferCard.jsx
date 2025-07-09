import styles from './LargeOfferCard.module.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../../../i18n/TranslationProvider';
import { ProductPrice } from '../../../components/ProductPrice';
import { ProductButton } from '../../shop/elements/ProductButton';
import { Badge } from '../../../components/Badge';

const LargeOfferCard = ({ product }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className={styles['large-offer-card']}>
      <div className={styles['large-offer-card-content']}>
        <Badge type="offer">
          <FormattedMessage id="Product.Save" />
          <span>40%</span>
        </Badge>
        <Link to={`/product/${product._id}`} className={styles['large-offer-card-link']}>
          <h2 className={styles['large-offer-card-title']}>{product[`${currentLanguage.code}_name`]}</h2>
        </Link>
        <p className={styles['large-offer-card-description']}>{product[`${currentLanguage.code}_description`]}</p>
        <ProductPrice price={product.price} />
        <ProductButton product={product} />
      </div>
      <div className={styles['large-offer-card-image-box']}>
        <img src={`${product.image}?w=350`} className={styles['large-offer-card-image']} alt={product[`${currentLanguage.code}_name`]} />
      </div>
    </div>
  );
};

export { LargeOfferCard };
