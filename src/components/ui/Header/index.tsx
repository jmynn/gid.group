import { PHONE_NUMBER } from '@/data';
import Link from 'next/link';
import { ReactNode } from 'react';
import ButtonMenu from '../ButtonMenu';
import IconPhone from '../Icons/IconPhone';
import MediaLogo from '../MediaLogo';
import styles from './index.module.css';

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <div className={styles.body}>
        <ButtonMenu />
        <MediaLogo section="header" />
        <Link href={`tel:${PHONE_NUMBER}`} className={styles.phone + ' _hover'}>
          <IconPhone />
        </Link>
      </div>
    </header>
  );
};

export default Header;
