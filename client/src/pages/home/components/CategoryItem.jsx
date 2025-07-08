import styles from './CategoryItem.module.css';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../../i18n/TranslationProvider';

const CategoryItem = ({ category }) => {
  const { currentLanguage } = useLanguage();

  return (
    <Link to={`/shop/${category.en_name.toLowerCase()}`} className={styles['category-item']}>
      <div className={styles['category-item-image-box']}>
        <img src={category.image} className={styles['category-item-image']} alt={category[`${currentLanguage.code}_name`]} />
      </div>
      <h3 className={styles['category-item-title']}>{category[`${currentLanguage.code}_name`]}</h3>
    </Link>
  );
};

export { CategoryItem };
