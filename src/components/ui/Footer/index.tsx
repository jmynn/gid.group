import ButtonOnTopFooter from '../ButtonOnTopFooter';
import IconFigure from '../Icons/IconFigure';
import LinksFooter from '../LinksFooter';
import SocialsFooter from '../SocialsFooter';
import styles from './index.module.css';
import { ReactNode } from 'react';

const Footer = (): ReactNode => {
  return (
    <footer className={styles.footer}>
      <div className={styles._figure}>
        <IconFigure />
      </div>
      <ButtonOnTopFooter />
      <SocialsFooter />
      <LinksFooter />
      <div className={styles.copyright}>
        Gid.group 2021/ All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
