import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './NotFoundPage.module.css';

import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';

const NotFoundPage = () => {
  return (
    <Fragment>
      <FormattedPageTitle id="NotFound.Title" />
      <PageContainer>
        <div className={styles['not-fount-box']}>
          <img src="/images/icons/not-found.svg" className={styles['not-found-image']} alt="Page not found" />
          <p className={styles['not-found-title']}>
            <FormattedMessage id="NotFound.Title" />
          </p>
          <p className={styles['not-found-subtitle']}>
            <FormattedMessage id="NotFound.SubTitle" />
          </p>
          <Link to="/" className={styles['btn-home-return']}>
            <FormattedMessage id="NotFound.ReturnHome" />
          </Link>
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { NotFoundPage };
