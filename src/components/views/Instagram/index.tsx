import IconInstagram from '@/components/ui/Icons/IconInstagram';
import styles from './index.module.css';
import { ReactNode } from 'react';
import BodyInstagram from '@/components/ui/BodyInstagram';

const Instagram = (): ReactNode => {
  return (
    <section className={styles.instagram}>
      <div className={styles.logo}>
        <IconInstagram />
      </div>
      <div className={styles.body}>
        <BodyInstagram />
      </div>
    </section>
  );
};

export default Instagram;
