import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../../../i18n/TranslationProvider';
import { setCategoryFilter } from '../../../store/slices/productSearchSlice';
import categories from '../../../assets/categories.json';

import styles from './FilterCategory.module.css';

const FilterCategory = () => {
  const {category} = useParams();

  const dispatch = useDispatch();
  const categoryFilter = useSelector((state) => state.productSearch.filters.category);
  const { currentLanguage } = useLanguage();

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  useEffect(() => {
    if (category) {
      dispatch(setCategoryFilter(category));
    }
  }, [category, dispatch]);

  return (
    <div className={styles['shop-filters-category']}>
      <select value={categoryFilter} onChange={handleCategoryChange} className={styles['select-shop-filters-category']}>
        <option value="">
          <FormattedMessage id="Shop.Filters.AllCategories" />
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.en_name.toLowerCase()}>
            {category[`${currentLanguage.code}_name`]}
          </option>
        ))}
      </select>
    </div>
  );
};

export { FilterCategory };
