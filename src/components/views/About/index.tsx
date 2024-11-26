import ItemAbout from '@/components/ui/ItemAbout';
import styles from './index.module.css';
import { ReactNode } from 'react';
import { ABOUT_INFO } from '@/data';

const About = (): ReactNode => {
  return (
    <section className={styles.about}>
      {ABOUT_INFO.map((item, i) => (
        <ItemAbout key={i} {...{ ...item }} />
      ))}
    </section>
  );
};

export default About;
