import styles from './ProductLoading.module.css';

const ProductLoading = () => {
  return (
    <div className={styles['product-loading']}>
      <div className={styles['product-image-box']}>
        <img src="/images/icons/image.svg" className={styles['product-image']} />
      </div>
      <div className={styles['product-info']}>
        <span className={styles['product-name']}></span>
        <div className={styles['product-category-price-stock']}>
          <span className={styles['product-category']}></span>
          <div className={styles['product-price-stock']}>
            <span className={styles['product-price']}></span>
            <span className={styles['product-stock']}></span>
          </div>
        </div>
      </div>
      <div className={styles['product-button']}></div>
    </div>
  );
};

export { ProductLoading };
