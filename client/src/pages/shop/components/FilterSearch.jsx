import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { setSearchFilter } from '../../../store/slices/productSearchSlice';

import styles from './FilterSearch.module.css';

const FilterSearch = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.productSearch.filters.search);

  const handleSearch = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  return (
    <div className={styles['shop-filters-search']}>
      <img src="/images/icons/search.svg" alt="search" className={styles['icon-shop-filters-search']} />
      <input type="text" value={search} placeholder={intl.formatMessage({ id: 'Shop.Filters.SearchPlaceholder' })} onChange={handleSearch} className={styles['input-shop-filters-search']} />
    </div>
  );
};

export { FilterSearch };
