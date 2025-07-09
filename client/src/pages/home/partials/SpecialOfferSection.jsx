import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOfferProducts } from '../../../store/slices/offerProductsSlice';
import { HomeLoading } from '../components/HomeLoading';
import { LargeOfferCard } from '../components/LargeOfferCard';
import { SmallOfferCard } from '../components/SmallOfferCard';

import styles from './SpecialOfferSection.module.css';


const SpecialOfferSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.offerProducts.products);

  useEffect(() => {
    dispatch(fetchOfferProducts());
  }, [dispatch]);

  if (products.length === 0) {
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
