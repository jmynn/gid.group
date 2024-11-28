'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './index.module.css';
import { ReactNode } from 'react';
import { SIZES } from '@/data';

const Dashes = (): ReactNode => {
  const isLarge = useMediaQuery(`(min-width: ${SIZES.DESKTOP}px)`);
  return (
    <>
      {isLarge && (
        <div className={styles.dashed}>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Dashes;
