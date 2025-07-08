import { useLanguage } from '../../i18n/TranslationProvider';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = ({ mobile = false }) => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <a onClick={() => changeLanguage(currentLanguage.code === 'en' ? 'ar' : 'en')} className={`${styles['btn-language']} ${mobile && styles['btn-language-mobile']}`}>
      <img src={`/images/icons/${currentLanguage.code === 'en' ? 'ar' : 'en'}.svg`} className={styles['btn-language-icon']} alt={currentLanguage.label} />
    </a>
  );
};
export { LanguageSwitcher };
