import styles from './Menu.module.css';
import { useLanguage } from '../../i18n/TranslationProvider';
import { MenuItem } from '../elements/MenuItem';
import { AuthButton } from '../elements/AuthButton';
import { LanguageSwitcher } from '../elements/LanguageSwitcher';

const Menu = ({ show, closeMenu }) => {
  const { currentLanguage } = useLanguage();

  return (
    <nav className={`${styles['header-nav']} ${show && styles['show']}`}>
      <ul className={styles['header-menu']}>
        {currentLanguage.menu.map((item, index) => (
          <MenuItem key={index} title={item.title} path={item.path} closeMenu={closeMenu} />
        ))}
      </ul>
      <div className={styles['mobile-buttons']}>
        <AuthButton mobile={true} />
        <LanguageSwitcher mobile={true} />
      </div>
    </nav>
  );
};

export { Menu };
