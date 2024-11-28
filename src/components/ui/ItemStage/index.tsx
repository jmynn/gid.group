import { TypeStage } from '@/types';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { PATHS } from '@/data';
import IconCheckmark from '../Icons/IconCheckmark';

type Props = TypeStage & {
  index: number;
};

const ItemStage: FunctionComponent<Props> = ({
  icon,
  text,
  title,
  description,
  index
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>
        0{index}
        <span>{title}</span>
      </div>
      <div className={styles.text}>{text}</div>
      {description && (
        <Link href={PATHS.calculate} className={styles.link}>
          <div>
            <IconCheckmark />
          </div>
          {description}
        </Link>
      )}
    </div>
  );
};

export default ItemStage;
