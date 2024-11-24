import { TypePaths } from '@/types';
import styles from './index.module.css';
import { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  path: TypePaths[keyof TypePaths];
  children: ReactNode;
};

const ButtonLinkGray: FunctionComponent<Props> = ({ path, children }) => {
  return (
    <Link href={path} className={styles.link + ' _hover'}>
      {children}
    </Link>
  );
};

export default ButtonLinkGray;
