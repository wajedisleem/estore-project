import styles from './FilterCategory.module.css';
import { useEffect } from 'react';
import categories from '../../../assets/categories.json';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from '../../../i18n/TranslationProvider';
import { FormattedMessage } from 'react-intl';

const FilterCategory = () => {
  const {category} = useParams();

  const dispatch = useDispatch();
  const categoryFilter = useSelector((state) => state.productSearch.filters.category);
  const { currentLanguage } = useLanguage();

  const handleCategoryChange = (e) => {
    //dispatch(filterByCategory(e.target.value));
  };

  useEffect(() => {
    if (category) {
      //dispatch(filterByCategory(category));
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
