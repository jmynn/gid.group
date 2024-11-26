import { TypeBonus } from '@/types';
import styles from './index.module.css';
import { FunctionComponent } from 'react';

type Props = {
  children: TypeBonus;
};

const ItemBonusPrice: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};

export default ItemBonusPrice;
