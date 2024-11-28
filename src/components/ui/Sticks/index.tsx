'use client';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import useMediaQuery, { TypeQuery } from '@/hooks/useMediaQuery';
import { TypePropsClassname } from '@/types';

type Props = TypePropsClassname<HTMLDivElement> & {
  countElement: number;
  defaultPosition: 0 | 25 | 33.333 | 50;
  defaultSide?: 'left' | 'right';
  mediaQuery: TypeQuery | `${TypeQuery} and ${TypeQuery}`;
};

const Sticks: FunctionComponent<Props> = ({
  className,
  countElement,
  defaultPosition,
  mediaQuery,
  defaultSide = 'left'
}) => {
  const isMedia = useMediaQuery(mediaQuery);

  return (
    <>
      {isMedia &&
        Array.from({ length: countElement }, (_, i) => (
          <div
            className={`${styles.stick} ${className ?? ''}`}
            key={i}
            style={{
              [defaultSide]: `${(i + 1) * defaultPosition}%`,
              translate: `${(i + 1) * defaultPosition * -1}% 0`
            }}
          ></div>
        ))}
    </>
  );
};

export default Sticks;
