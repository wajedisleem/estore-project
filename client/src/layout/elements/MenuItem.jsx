import { Link, useLocation } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ title, path, closeMenu }) => {
  const location = useLocation();
  const active = location.pathname === path;
  return (
    <li>
      <Link to={path} onClick={closeMenu} className={`${styles['header-menu-item']} ${active && styles['active']}`}>
        {title}
      </Link>
    </li>
  );
};
export { MenuItem };
