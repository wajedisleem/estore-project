import { Container } from './Container';
import styles from './PageContainer.module.css';

const PageContainer = ({ children }) => {
  return (
    <main className={styles['main-content']}>
      <Container>
        <div className={styles['page-container']}>{children}</div>
      </Container>
    </main>
  );
};

export { PageContainer };
