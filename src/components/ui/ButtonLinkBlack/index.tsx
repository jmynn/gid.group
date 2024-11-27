'use client';
import Link from 'next/link';
import styles from './index.module.css';
import { FunctionComponent, ReactNode } from 'react';
import { TypePath, TypePropsClassname } from '@/types';

type Props = {
  children: ReactNode;
  path: TypePath;
} & TypePropsClassname<HTMLLinkElement>;

const ButtonLinkBlack: FunctionComponent<Props> = ({
  children,
  path,
  className
}) => {
  return (
    <Link href={path} className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonLinkBlack;
