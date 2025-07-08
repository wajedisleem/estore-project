import styles from './ProductDescription.module.css';

const ProductDescription = ({ description }) => {
  return <p className={styles['product-description']}>{description}</p>;
};

export { ProductDescription };
