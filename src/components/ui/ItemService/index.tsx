'use client';
import { SIZES } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import { TypePropsClassname, TypeService } from '@/types';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import styles from './index.module.css';

type Props = TypeService & TypePropsClassname<HTMLDivElement>;

const ItemService: FunctionComponent<Props> = ({
  src,
  text,
  title,
  className
}) => {
  const isLarge = useMediaQuery(`(min-width: ${SIZES.DESKTOP}px)`);
  return (
    <div className={`${styles.service} ${className ?? ''}`}>
      <div className={styles.image}>
        <Image
          src={src}
          alt="service pic"
          sizes="100vw"
          width={437}
          height={487}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
        {isLarge && <div className={styles.rect}></div>}
      </div>
      <div className={styles.figures}>
        <div className={styles.square}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default ItemService;
