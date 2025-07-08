import styles from './Badge.module.css';

const Badge = ({ children, type }) => {
  return <label className={`${styles['product-badge']} ${styles[`product-badge-${type}`]}`}>{children}</label>;
};

export { Badge };
