import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../../components/Container';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container>
        <div className={styles['footer-box']}>
          <span>
            <FormattedMessage id="Layout.Title" />
          </span>
          <span>
            <FormattedMessage id="Layout.Copyrights" />
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
