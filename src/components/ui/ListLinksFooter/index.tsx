import { TypeFooter } from '@/types';
import styles from './index.module.css';
import { FunctionComponent } from 'react';
import LinkFooter from '../LinkFooter';

type Props = Pick<TypeFooter, 'links'>;

const ListLinksFooter: FunctionComponent<Props> = ({ links }) => {
  return (
    <div className={styles.list}>
      {links.map((item, j) => (
        <LinkFooter key={`${j}-${item.path}`} {...{ ...item }} />
      ))}
    </div>
  );
};

export default ListLinksFooter;
