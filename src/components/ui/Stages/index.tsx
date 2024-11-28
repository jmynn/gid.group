import { STAGES } from '@/data';
import { ReactNode } from 'react';
import ItemStage from '../ItemStage';

const Stages = (): ReactNode => {
  return (
    <>
      {STAGES.map((stage, i) => (
        <ItemStage key={i} index={i + 1} {...{ ...stage }} />
      ))}
    </>
  );
};

export default Stages;
