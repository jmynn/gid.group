import styles from './index.module.css';
import { FunctionComponent } from 'react';

type Props = {
  children: string;
};

const HeadlineSection: FunctionComponent<Props> = ({ children }) => {
  return <h2 className={`${styles.headline}`}>{children}</h2>;
};

export default HeadlineSection;
