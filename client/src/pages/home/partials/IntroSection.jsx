import styles from './IntroSection.module.css';
import { FormattedMessage } from 'react-intl';

const IntroSection = () => {
  return (
    <div className={styles['intro-section']}>
      <h1 className={styles['intro-title']}>
        <FormattedMessage id="Home.PageTitle" />
      </h1>
      <p>
        <FormattedMessage id="Home.PageSubTitle" />
      </p>
    </div>
  );
};

export { IntroSection };
