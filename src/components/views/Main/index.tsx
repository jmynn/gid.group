import Header from '@/components/ui/Header';
import MainArrowToDown from '@/components/ui/MainArrowToDown';
import MediaLogo from '@/components/ui/MediaLogo';
import { PATHS } from '@/data';
import styles from './index.module.css';
import { ReactNode } from 'react';
import ButtonLinkGray from '@/components/ui/ButtonLinkGray';

const Main = (): ReactNode => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.body}>
        <MediaLogo section="main" />
        <h1 className={styles.title}>{'Лучшее для\n лучших'}</h1>
        <div className={styles.links}>
          <ButtonLinkGray path={PATHS.projects}>Проекты</ButtonLinkGray>
          <ButtonLinkGray path={PATHS.calculate}>
            Рассчитать стоимость
          </ButtonLinkGray>
        </div>
      </div>
      <MainArrowToDown />
    </main>
  );
};

export default Main;
