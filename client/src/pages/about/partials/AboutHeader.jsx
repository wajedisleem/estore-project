import styles from './AboutHeader.module.css';
import { FormattedMessage } from 'react-intl';

const AboutHeader = () => {
  return (
    <div className={styles['about-header']}>
      <h1 className={styles['about-title']}>
        <FormattedMessage id="About.Title" />
      </h1>
      <p>
        <FormattedMessage id="About.SubTitle" />
      </p>
    </div>
  );
};

export { AboutHeader };
