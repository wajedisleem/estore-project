import styles from './FAQSection.module.css';
import { FormattedMessage } from 'react-intl';
import faqs from '../../../assets/faqs.json';
import FAQItem from '../components/FAQItem';

const FAQSection = () => {
  return (
    <section className={styles['faq-section']}>
      <h2 className={styles['faq-header']}>
        <FormattedMessage id="About.FAQ.Title" />
      </h2>
      <div className={styles['faq-list']}>
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export { FAQSection };
