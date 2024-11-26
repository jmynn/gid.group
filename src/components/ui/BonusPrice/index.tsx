'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ReactNode } from 'react';
import styles from './index.module.css';
import IconFigure from '../Icons/IconFigure';
import { BONUSES, PATHS } from '@/data';
import ItemBonusPrice from '../ItemBonusPrice';
import ButtonLinkBlack from '../ButtonLinkBlack';

const BonusPrice = (): ReactNode => {
  const isLarge = useMediaQuery('(min-width: 834px)');
  return (
    <div className={styles.bonus}>
      <div className={styles._figure}>
        <IconFigure />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>Бонусы:</div>
        <div className={styles.info}>
          {BONUSES.map((bonus, i) => (
            <ItemBonusPrice key={i}>{bonus}</ItemBonusPrice>
          ))}
        </div>
      </div>
      {!isLarge && (
        <ButtonLinkBlack path={PATHS.calculate}>
          Узнать стоимость
        </ButtonLinkBlack>
      )}
    </div>
  );
};

export default BonusPrice;
