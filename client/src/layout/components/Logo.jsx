import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={styles['header-logo']}>
      <img src="/images/logo.svg" className={styles['logo-img']} alt="Logo" />
      <div className={styles['logo-text']}>
        <span className={styles['logo-title']}>
          <FormattedMessage id="Layout.Title" />
        </span>
        <span className={styles['logo-subtitle']}>
          <FormattedMessage id="Layout.By" />
        </span>
      </div>
    </Link>
  );
};

export { Logo };
