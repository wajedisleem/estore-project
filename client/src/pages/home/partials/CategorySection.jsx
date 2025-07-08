import styles from './CategorySection.module.css';
import categories from '../../../assets/categories.json';
import { CategoryItem } from '../components/CategoryItem';

const CategorySection = () => {
  return (
    <div className={styles['category-section']}>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export { CategorySection };
