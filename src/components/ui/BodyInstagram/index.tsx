import { INSTAGRAM } from '@/data';
import { ReactNode } from 'react';
import ItemInstagram from '../ItemInstagram';

const BodyInstagram = (): ReactNode => {
  return (
    <>
      {INSTAGRAM.map((path, i) => (
        <ItemInstagram key={i} path={path} />
      ))}
    </>
  );
};

export default BodyInstagram;
