import styles from './FilterSection.module.css';
import { FilterSearch } from '../components/FilterSearch';
import { FilterCategory } from '../components/FilterCategory';
import { FilterSort } from '../components/FilterSort';

const FilterSection = () => {
  return (
    <div className={styles['shop-filters']}>
      <FilterSearch />
      <div className={styles['shop-filters-category-sort']}>
        <FilterCategory />
        <FilterSort />
      </div>
    </div>
  );
};

export { FilterSection };
