import { INSTAGRAM } from '@/data';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import styles from './index.module.css';

type Props = {
  path: (typeof INSTAGRAM)[number];
};

const ItemInstagram: FunctionComponent<Props> = ({ path }) => {
  return (
    <div className={`${styles.item}`}>
      <Image
        src={path}
        width={417}
        height={417}
        alt="inst pic"
        sizes="100vw"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default ItemInstagram;
