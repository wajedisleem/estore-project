import { Fragment } from 'react';
import styles from './HomePage.module.css';
import { FormattedPageTitle } from '../../components/PageTitle';
import { PageContainer } from '../../components/PageContainer';

import { IntroSection } from './partials/IntroSection';
import { CategorySection } from './partials/CategorySection';
import { SpecialOfferSection } from './partials/SpecialOfferSection';
import { BenefitSection } from './partials/BenefitSection';
import { NewArrivalSection } from './partials/NewArrivalSection';
import { FeaturedSection } from './partials/FeaturedSection';

const HomePage = () => {
  return (
    <Fragment>
      <FormattedPageTitle id="Home.Title" />
      <PageContainer>
        <div className={styles['home-box']}>
          <IntroSection />
          <CategorySection />
          <SpecialOfferSection />
          <BenefitSection />
          <NewArrivalSection />
          <FeaturedSection />
        </div>
      </PageContainer>
    </Fragment>
  );
};

export { HomePage };
