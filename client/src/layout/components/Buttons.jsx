import styles from './Buttons.module.css';
import { LanguageSwitcher } from '../elements/LanguageSwitcher';
import { AuthButton } from '../elements/AuthButton';
import { ShoppingCart } from '../elements/ShoppingCart';
import { MenuButton } from '../elements/MenuButton';

const Buttons = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={styles['header-buttons']}>
      <LanguageSwitcher />
      <AuthButton />
      <ShoppingCart />
      <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
export { Buttons };
