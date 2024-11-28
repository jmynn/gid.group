import HeadlineSection from '@/components/ui/HeadlineSection';
import ServicesBody from '@/components/ui/Services';
import Sticks from '@/components/ui/Sticks';
import { ReactNode } from 'react';
import styles from './index.module.css';
import { SERVICES, SIZES } from '@/data';

const Services = (): ReactNode => {
  return (
    <section className={styles.services}>
      <Sticks
        defaultPosition={0}
        countElement={1}
        mediaQuery={`(min-width: ${SIZES.TABLET}px)`}
      />
      <HeadlineSection>основные услуги</HeadlineSection>
      <div className={styles.row}>
        <ServicesBody />
      </div>
      <Sticks
        defaultPosition={50}
        countElement={1}
        mediaQuery={`(min-width: ${SIZES.TABLET}px) and (max-width: ${SIZES.DESKTOP}px)`}
      />
      <Sticks
        defaultPosition={25}
        countElement={SERVICES.length - 1}
        mediaQuery={`(min-width: ${SIZES.DESKTOP}px)`}
      />
      <Sticks
        defaultPosition={0}
        countElement={1}
        mediaQuery={`(min-width: ${SIZES.TABLET}px)`}
        defaultSide="right"
      />
    </section>
  );
};

export default Services;
