import HeadlineSection from '@/components/ui/HeadlineSection';
import styles from './index.module.css';
import { ReactNode } from 'react';
import ButtonLinkBlack from '@/components/ui/ButtonLinkBlack';
import IconArrowRound from '@/components/ui/Icons/IconArrowRound';
import { PATHS, SIZES } from '@/data';
import ProjectBody from '@/components/ui/Projects';
import Sticks from '@/components/ui/Sticks';

const Projects = (): ReactNode => {
  return (
    <section className={styles.projects}>
      <HeadlineSection>НАШИ ПРОЕКТЫ</HeadlineSection>
      <div className={styles.body}>
        <ProjectBody />
      </div>
      <ButtonLinkBlack path={PATHS.projects} className={styles.link}>
        <IconArrowRound />
        Еще проекты
      </ButtonLinkBlack>
      <Sticks
        countElement={2}
        defaultPosition={33.333}
        mediaQuery={`(min-width: ${SIZES.DESKTOP}px)`}
      />
    </section>
  );
};

export default Projects;
