import styles from './ProductCategory.module.css';

const ProductCategory = ({ category }) => {
  return <span className={styles['product-category']}>{category}</span>;
};

export { ProductCategory };
