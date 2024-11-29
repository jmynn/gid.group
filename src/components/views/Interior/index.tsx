import { INTERIOR } from '@/data';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Interior = (): ReactNode => {
  return (
    <section className={styles.interior}>
      <div>
        <h2 className={styles.title}>МЫ ТАМ, ГДЕ:</h2>
        <div className={styles.body}>
          {INTERIOR.map((text, i) => (
            <div className={styles.item} key={i}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interior;
