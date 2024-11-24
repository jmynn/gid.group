'use client';
import { ReactNode } from 'react';
import IconArrowLight from '../Icons/IconArrowLight';
import styles from './index.module.css';

const MainArrowToDown = (): ReactNode => {
  return (
    <button className={styles.btn}>
      <IconArrowLight />
    </button>
  );
};

export default MainArrowToDown;
