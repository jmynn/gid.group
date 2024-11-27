import { SERVICES } from '@/data';
import { ReactNode, useMemo } from 'react';
import ItemService from '../ItemService';

const Services = (): ReactNode => {
  const Component = useMemo(
    () =>
      SERVICES.map((service, i) => <ItemService key={i} {...{ ...service }} />),
    []
  );
  return Component;
};

export default Services;
