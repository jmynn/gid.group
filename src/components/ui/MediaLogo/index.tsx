'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { FunctionComponent } from 'react';
import Logo from '../Icons/Logo';
import styles from './index.module.css';

type Props = {
  section: 'header' | 'main';
};

const MediaLogo: FunctionComponent<Props> = ({ section }) => {
  const isLarge = useMediaQuery('(min-width: 834px)');
  if (section === 'header') {
    return (
      <>
        {isLarge && (
          <div className={styles.logo}>
            <Logo />
          </div>
        )}
        {!isLarge && <></>}
      </>
    );
  }
  if (section === 'main') {
    return (
      <>
        {!isLarge && (
          <div className={styles.logo}>
            <Logo />
          </div>
        )}
        {isLarge && <></>}
      </>
    );
  }
};

export default MediaLogo;
