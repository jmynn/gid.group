import { TypeFooter } from '@/types';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import ListLinksFooter from '../ListLinksFooter';

type Props = Pick<TypeFooter, 'links' | 'title'>;

const ColumnLinksFooter: FunctionComponent<Props> = ({ links, title }) => {
  return (
    <div className={styles.column}>
      <div className={styles.title}>{title}</div>
      <ListLinksFooter links={links} />
    </div>
  );
};

export default ColumnLinksFooter;
