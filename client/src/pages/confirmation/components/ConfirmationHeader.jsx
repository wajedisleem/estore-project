import styles from './ConfirmationHeader.module.css';
import { FormattedMessage } from 'react-intl';

const ConfirmationHeader = () => {
  return (
    <div className={styles['confirmation-header']}>
      <img src="/images/icons/confirmation.svg" alt="Confirmation" />
      <h1 className={styles['confirmation-header-title']}>
        <FormattedMessage id="Confirmation.Header.Title" />
      </h1>
      <p className={styles['confirmation-header-subtitle']}>
        <FormattedMessage id="Confirmation.Header.Subtitle" />
      </p>
    </div>
  );
};

export { ConfirmationHeader };
