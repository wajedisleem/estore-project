import styles from './ShopHeader.module.css';
import { FormattedMessage } from 'react-intl';

const ShopHeader = () => {
  return (
    <div className={styles['shop-header']}>
      <h1 className={styles['shop-title']}>
        <FormattedMessage id="Shop.PageTitle" />
      </h1>
      <p>
        <FormattedMessage id="Shop.PageSubTitle" />
      </p>
    </div>
  );
}
export { ShopHeader };