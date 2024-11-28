import HeadlineSection from '@/components/ui/HeadlineSection';
import StagesBody from '@/components/ui/Stages';
import styles from './index.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import IconArrowLong from '@/components/ui/Icons/IconArrowLong';
import { PATHS } from '@/data';
import Dashes from '@/components/ui/Dashes';

const Stages = (): ReactNode => {
  return (
    <section className={styles.stages}>
      <HeadlineSection>
        {'6 ЭТАПОВ ОТ ЗАЯВКИ ДО\n СДАЧИ ГОТОВОГО ОБЪЕКТА'}
      </HeadlineSection>
      <div className={styles.body}>
        <StagesBody />
      </div>
      <Link href={PATHS.calculate} className={`${styles.link} _hover`}>
        Начать <IconArrowLong />
      </Link>
      <Dashes />
    </section>
  );
};

export default Stages;
