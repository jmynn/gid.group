import BonusPrice from '@/components/ui/BonusPrice';
import HeadlineSection from '@/components/ui/HeadlineSection';
import InfoPrice from '@/components/ui/InfoPrice';
import { ReactNode } from 'react';
import styles from './index.module.css';

const Price = (): ReactNode => {
  return (
    <section className={styles.price}>
      <HeadlineSection>стоимость проекта</HeadlineSection>
      <div className={styles.row}>
        <InfoPrice />
        <BonusPrice />
      </div>
    </section>
  );
};

export default Price;
