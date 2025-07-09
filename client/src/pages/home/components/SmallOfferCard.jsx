import styles from './SmallOfferCard.module.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../../../i18n/TranslationProvider';
import { ProductPrice } from '../../../components/ProductPrice';
import { ProductButton } from '../../shop/elements/ProductButton';
import { Badge } from '../../../components/Badge';

const SmallOfferCard = ({ product, num }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className={`${styles['small-offer-card']} ${styles[`small-offer-card-${num}`]}`}>
      <div className={styles['small-offer-card-content']}>
        <Badge type="offer">
          <FormattedMessage id="Product.Save" />
          <span>25%</span>
        </Badge>
        <Link to={`/product/${product._id}`} className={styles['small-offer-card-link']}>
          <h2 className={styles['small-offer-card-title']}>{product[`${currentLanguage.code}_name`]}</h2>
        </Link>
        <ProductPrice price={product.price} />
        <ProductButton product={product} />
      </div>
      <div className={styles['small-offer-card-image-box']}>
        <img src={`${product.image}?w=350`} className={styles['small-offer-card-image']} alt={product[`${currentLanguage.code}_name`]} />
      </div>
    </div>
  );
};

export { SmallOfferCard };
