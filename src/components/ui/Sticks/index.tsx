'use client';
import { SERVICES, SIZES } from '@/data';
import styles from './index.module.css';
import { FunctionComponent, useMemo } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { TypePropsClassname } from '@/types';

type Props = Required<TypePropsClassname<HTMLDivElement>>;

const Sticks: FunctionComponent<Props> = ({ className }) => {
  const isTablet = useMediaQuery(`(min-width: ${SIZES.TABLET}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${SIZES.DESKTOP}px)`);
  const countElement = useMemo(() => SERVICES.length, []);

  return (
    <>
      {isTablet && !isDesktop && <div className={`${className}`}></div>}
      {isDesktop &&
        Array.from({ length: countElement - 1 }, (_, i) => (
          <div
            className={`${className}`}
            key={i}
            id={styles[`_${i + 1}`]}
          ></div>
        ))}
    </>
  );
};

export default Sticks;
