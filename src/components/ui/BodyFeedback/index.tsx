'use client';
import { SIZES } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { ReactNode } from 'react';
import FormFeedback from '../FormFeedback';
import styles from './index.module.css';

const BodyFeedback = (): ReactNode => {
  const isLarge = useMediaQuery(`(min-width: ${SIZES.TABLET}px)`);
  return (
    <div className={styles.row}>
      {isLarge && (
        <div className={styles.left}>
          <Image
            src={
              'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fcatalog.png?alt=media&token=a99d78d8-a09d-4abd-8e0e-5f4a8eb24f52'
            }
            alt="feedback pic"
            width={958}
            height={639}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      <div className={styles.right}>
        <div className={styles.info}>
          <div className={styles.title}>
            Оставьте ваш E-mail, чтобы получить каталог наших проектов
          </div>
          <div className={styles.subtitle}>
            Каталог поможет вам выбрать стиль и продумать планировку квартиры
          </div>
        </div>
        <FormFeedback />
      </div>
    </div>
  );
};

export default BodyFeedback;
