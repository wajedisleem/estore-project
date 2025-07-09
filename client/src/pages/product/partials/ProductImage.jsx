import styles from './ProductImage.module.css';

const ProductImage = ({ product }) => {
  return <img src={`${product.image}?w=350`} className={styles['product-image']} alt={product.name} />;
};
export { ProductImage };
