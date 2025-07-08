import { Fragment } from 'react';
import styles from './AboutPage.module.css';

import { PageContainer } from '../../components/PageContainer';
import { FormattedPageTitle } from '../../components/PageTitle';
import { AboutHeader } from './partials/AboutHeader';
import { VisionSection } from './partials/VisionSection';
import { FAQSection } from './partials/FAQSection';
import { ContactSection } from './partials/ContactSection';

const AboutPage = () => {
  return (
    <Fragment>
      <FormattedPageTitle id="About.Title" />
      <PageContainer>
        <div className={styles['about-box']}>
          <AboutHeader />
          <VisionSection />
          <FAQSection />
          <ContactSection />
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { AboutPage };
