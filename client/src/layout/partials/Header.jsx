import { useState } from 'react';
import { Container } from '../../components/Container';
import styles from './Header.module.css';
import { Logo } from '../components/Logo';
import { Menu } from '../components/Menu';
import { Buttons } from '../components/Buttons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header-box']}>
          <div className={styles['header-logo-menu']}>
            <Logo />
            <Menu show={menuOpen} closeMenu={() => setMenuOpen(false)} />
          </div>
          <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </Container>
    </header>
  );
};
export { Header };
