import HeadlineSection from '@/components/ui/HeadlineSection';
import ServicesBody from '@/components/ui/Services';
import Sticks from '@/components/ui/Sticks';
import { ReactNode } from 'react';
import styles from './index.module.css';

const Services = (): ReactNode => {
  return (
    <section className={styles.services}>
      <div className={`${styles._stick} ${styles._left}`}></div>
      <HeadlineSection>основные услуги</HeadlineSection>
      <div className={styles.row}>
        <ServicesBody />
      </div>
      <Sticks className={`${styles._stick} ${styles._opt}`} />
      <div className={`${styles._stick} ${styles._right}`}></div>
    </section>
  );
};

export default Services;
