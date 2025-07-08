import styles from './MenuButton.module.css';

const MenuButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <a onClick={() => setMenuOpen(!menuOpen)} className={styles['btn-menu']}>
      <img src={`/images/icons/menu-${menuOpen ? 'close' : 'burger'}.svg`} className={styles['btn-menu-icon']} alt="menu" />
    </a>
  );
};
export { MenuButton };
