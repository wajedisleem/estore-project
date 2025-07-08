import styles from './VisionSection.module.css';
import { FormattedMessage } from 'react-intl';

const VisionSection = () => {
  return (
    <section className={styles['vision-section']}>
      <h2 className={styles['vision-title']}>
        <FormattedMessage id="About.Vision.Title" />
      </h2>
      <p className={styles['vision-description']}>
        <FormattedMessage id="About.Vision.Description" />
      </p>
    </section>
  );
};

export { VisionSection };
