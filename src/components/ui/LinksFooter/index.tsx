'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './index.module.css';
import { Fragment, ReactNode } from 'react';
import { FOOTER_LINKS, SIZES } from '@/data';
import ColumnLinksFooter from '../ColumnLinksFooter';

const LinksFooter = (): ReactNode => {
  const isLarge = useMediaQuery(`(min-width: ${SIZES.TABLET}px)`);
  return (
    <div className={styles.links}>
      {FOOTER_LINKS.map((col, i) => {
        if (col.id !== 'contacts') {
          return (
            <Fragment key={`${i}-${col.id}`}>
              {isLarge && (
                <ColumnLinksFooter links={col.links} title={col.title} />
              )}
            </Fragment>
          );
        }
        return (
          <ColumnLinksFooter
            links={col.links}
            title={col.title}
            key={`${i}-${col.id}`}
          />
        );
      })}
    </div>
  );
};

export default LinksFooter;
