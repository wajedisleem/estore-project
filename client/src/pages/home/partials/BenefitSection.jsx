import styles from './BenefitSection.module.css';
import benefits from '../../../assets/benefits.json';
import { BenefitItem } from '../components/BenefitItem';

const BenefitSection = () => {
  return (
    <div className={styles['benefit-section']}>
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} benefit={benefit} />
      ))}
    </div>
  );
};

export { BenefitSection };
