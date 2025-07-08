import styles from './ProductName.module.css';

const ProductName = ({ name }) => {
  return <h1 className={styles['product-name']}>{name}</h1>;
};

export { ProductName };