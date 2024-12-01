'use client';
import { SIZES } from '@/data';
import IconArrowShort from '../Icons/IconArrowShort';
import styles from './index.module.css';
import { ReactNode } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const ButtonOnTopFooter = (): ReactNode => {
  const isLarge = useMediaQuery(`(min-width: ${SIZES.TABLET}px)`);
  const handleClick = () => window.scrollTo(0, 0);
  return (
    <>
      {isLarge && (
        <div className={styles.ontop}>
          <button className={`${styles.btn} _hover`} onClick={handleClick}>
            <IconArrowShort />
            <span>Наверх</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonOnTopFooter;
