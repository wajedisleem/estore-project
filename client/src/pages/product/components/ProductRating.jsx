import { FormattedMessage } from 'react-intl';
import styles from './ProductRating.module.css';

const ProductRating = ({ rating, reviews }) => {
  return (
    <div className={styles['product-rating']}>
      <div className={styles['product-rating-stars']}>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={`${styles['product-rating-star']} ${index < rating && styles['filled']}`}>
            ★
          </span>
        ))}
      </div>
      <span className={styles['product-review-count']}>
        ( {reviews} <FormattedMessage id="Product.Reviews" /> )
      </span>
    </div>
  );
};

export { ProductRating };
