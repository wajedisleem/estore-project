import styles from './SpecialOfferSection.module.css';
import { useSelector } from 'react-redux';
import { HomeLoading } from '../components/HomeLoading';
import { LargeOfferCard } from '../components/LargeOfferCard';
import { SmallOfferCard } from '../components/SmallOfferCard';

const SpecialOfferSection = () => {
  const items = useSelector((state) => state.products.items);
  let products = items.filter((item) => item.offer);

  if (items.length === 0) {
    return <HomeLoading />;
  }

  return (
    <div className={styles['special-offer-section']}>
      <LargeOfferCard product={products[0]} />
      <div className={styles['special-offer-small']}>
        <SmallOfferCard product={products[1]} num="1" />
        <SmallOfferCard product={products[2]} num="2" />
      </div>
    </div>
  );
};

export { SpecialOfferSection };
