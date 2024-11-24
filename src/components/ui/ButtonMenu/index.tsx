'use client';
import IconMenu from '../Icons/IconMenu';
import styles from './index.module.css';
import { ReactNode } from 'react';

const ButtonMenu = (): ReactNode => {
  const handleClick = () => console.log('🚀 ~ ButtonMenu ~ handleClick: CLICK');
  return (
    <button className={styles.menu + ' _hover'} onClick={handleClick}>
      <IconMenu />
    </button>
  );
};

export default ButtonMenu;
