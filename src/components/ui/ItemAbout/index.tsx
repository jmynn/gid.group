import { TypeAboutItem } from '@/types';
import styles from './index.module.css';
import { FunctionComponent } from 'react';

type Props = TypeAboutItem;

const ItemAbout: FunctionComponent<Props> = ({ subtitle, text, title }) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles._square}></div>
      </div>
    </div>
  );
};

export default ItemAbout;
