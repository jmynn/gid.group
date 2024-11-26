'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './index.module.css';
import { ReactNode } from 'react';
import ButtonLinkBlack from '../ButtonLinkBlack';
import { PATHS } from '@/data';

const InfoPrice = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 834px)');
  return (
    <div className={styles.info}>
      <div className={styles.title}>
        {'Узнайте стоимость дизайн-проекта,\n ответив на 3 вопроса'}
      </div>
      <div className={styles.subtitle}>
        {
          'Пройдите короткий тест, узнайте цену,\n получите консультацию по будущему\n проекту'
        }
      </div>
      {isLarge && (
        <ButtonLinkBlack path={PATHS.calculate} className={styles._btn}>
          Узнать стоимость
        </ButtonLinkBlack>
      )}
    </div>
  );
};

export default InfoPrice;
