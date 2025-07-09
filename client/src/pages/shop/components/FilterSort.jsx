import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { setSortFilter } from '../../../store/slices/productSearchSlice';

import styles from './FilterSort.module.css';

const FilterSort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.productSearch.filters.sort);

  const handleSortChange = (e) => {
    dispatch(setSortFilter(e.target.value));
  };

  return (
    <div className={styles['shop-filters-sort']}>
      <select value={sort} onChange={handleSortChange} className={styles['select-shop-filters-sort']}>
        <option value="">
          <FormattedMessage id="Shop.Filters.SortBy" />
        </option>
        <option value="alphabetically">
          <FormattedMessage id="Shop.Filters.SortOptions.Alphabetical" />
        </option>
        <option value="price-low-high">
          <FormattedMessage id="Shop.Filters.SortOptions.PriceLowToHigh" />
        </option>
        <option value="price-high-low">
          <FormattedMessage id="Shop.Filters.SortOptions.PriceHighToLow" />
        </option>
      </select>
    </div>
  );
};

export { FilterSort };
