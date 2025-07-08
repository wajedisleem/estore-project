import styles from './BenefitItem.module.css';
import { useLanguage } from '../../../i18n/TranslationProvider';

const BenefitItem = ({ benefit }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className={styles['benefit-item']}>
      <div className={styles['benefit-item-icon']}>
        <img src={benefit.icon} alt={benefit[`${currentLanguage.code}_title`]} />
      </div>
      <div className={styles['benefit-item-content']}>
        <h3 className={styles['benefit-item-title']}>{benefit[`${currentLanguage.code}_title`]}</h3>
        <p className={styles['benefit-item-description']}>{benefit[`${currentLanguage.code}_description`]}</p>
      </div>
    </div>
  );
};

export { BenefitItem };
