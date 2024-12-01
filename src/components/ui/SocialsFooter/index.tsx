'use client';
import { FOOTER_SOCIALS, SIZES } from '@/data';
import Logo from '../Icons/Logo';
import styles from './index.module.css';
import { ReactNode } from 'react';
import LinkSocialFooter from '../LinkSocialFooter';
import useMediaQuery from '@/hooks/useMediaQuery';

const SocialsFooter = (): ReactNode => {
  const isLarge = useMediaQuery(`(min-width: ${SIZES.TABLET}px)`);
  return (
    <div className={styles.socials}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {isLarge && (
        <div className={styles.links}>
          {FOOTER_SOCIALS.map((social, i) => (
            <LinkSocialFooter key={`${i}-${social.path}`} {...{ ...social }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialsFooter;
