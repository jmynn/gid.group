'use client';
import Link from 'next/link';
import styles from './index.module.css';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { TypePath } from '@/types';

type Props = {
  children: ReactNode;
  path: TypePath;
  className?: HTMLAttributes<HTMLLinkElement>['className'];
};

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
