import Link from 'next/link';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import { TypeFooterSocial } from '@/types';

type Props = TypeFooterSocial;

const LinkSocialFooter: FunctionComponent<Props> = ({ icon, path }) => {
  return (
    <Link className={`${styles.link} _hover`} href={path}>
      {icon}
    </Link>
  );
};

export default LinkSocialFooter;
