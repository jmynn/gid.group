import Link from 'next/link';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import { TypeFooterData } from '@/types';

type Props = TypeFooterData;

const LinkFooter: FunctionComponent<Props> = ({ label, path }) => {
  return (
    <Link href={path} className={styles.link + ' _hover'}>
      {label}
    </Link>
  );
};

export default LinkFooter;
