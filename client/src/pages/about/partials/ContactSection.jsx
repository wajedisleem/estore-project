import styles from './ContactSection.module.css';
import { FormattedMessage } from 'react-intl';

const ContactSection = () => {
  return (
    <section className={styles['contact-section']}>
      <h2 className={styles['contact-title']}>
        <FormattedMessage id="About.Contact.Title" />
      </h2>
      <div className={styles['contact-cards']}>
        <div className={styles['contact-card']}>
          <div className={styles['contact-card-icon']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="currentColor" />
            </svg>
          </div>
          <h3 className={styles['contact-card-title']}>
            <FormattedMessage id="About.Contact.Email" />
          </h3>
          <a href="mailto:info@estore-project.online" className={styles['contact-card-link']}>
            info@estore-project.online
          </a>
        </div>
        <div className={styles['contact-card']}>
          <div className={styles['contact-card-icon']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className={styles['contact-card-title']}>
            <FormattedMessage id="About.Contact.Phone" />
          </h3>
          <a href={`tel:+1 (403) 991-1234`} className={styles['contact-card-link']}>
            +1 (403) 991-3556
          </a>
        </div>
        <div className={styles['contact-card']}>
          <div className={styles['contact-card-icon']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className={styles['contact-card-title']}>
            <FormattedMessage id="About.Contact.Address" />
          </h3>
          <span className={styles['contact-card-address']}>7832 Hunterquay Rd Nw, Calgary, AB, T2K 4T8</span>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
