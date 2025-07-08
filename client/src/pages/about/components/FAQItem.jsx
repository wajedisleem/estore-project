import { useState } from 'react';
import styles from './FAQItem.module.css';
import { useLanguage } from '../../../i18n/TranslationProvider';

const FAQItem = ({ faq }) => {
  const { currentLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles['faq-item']}>
      <div className={`${styles['faq-question']} ${open && styles['faq-question-open']}`} onClick={() => setOpen(!open)}>
        {faq[`${currentLanguage.code}_question`]}
        <span className={styles['faq-icon']}>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div className={styles['faq-answer']}>
          <p>{faq[`${currentLanguage.code}_answer`]}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
