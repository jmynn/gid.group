import HeadlineSection from '@/components/ui/HeadlineSection';
import styles from './index.module.css';
import { ReactNode } from 'react';
import BodyFeedback from '@/components/ui/BodyFeedback';

const Feedback = (): ReactNode => {
  return (
    <section className={styles.feedback}>
      <HeadlineSection>{'ПОЛУЧИТЕ КАТАЛОГ\n НАШИХ ПРОЕКТОВ'}</HeadlineSection>
      <BodyFeedback />
    </section>
  );
};

export default Feedback;
