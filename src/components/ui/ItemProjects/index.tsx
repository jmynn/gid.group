'use client';
import { TypeProject } from '@/types';
import styles from './index.module.css';
import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SIZES } from '@/data';

type Props = TypeProject;

const ItemProjects: FunctionComponent<Props> = ({
  id,
  footage,
  src,
  style,
  title
}) => {
  const isPointer = useMediaQuery(`(pointer: fine)`);
  const isLarge = useMediaQuery(`(min-width: ${SIZES.DESKTOP}px)`);
  const overlay = useMemo(
    () => (
      <div className={styles._overlay}>
        <Link href={`/${id}`} className="_hover">
          Смотреть проект
        </Link>
      </div>
    ),
    [id]
  );
  return (
    <div className={styles.item}>
      {isPointer && !isLarge && overlay}
      <div className={styles.image}>
        <Image
          width={576}
          height={657}
          alt="project pic"
          src={src}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {isPointer && isLarge && overlay}
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div>
          <div className={styles.style}>Стиль - {style}</div>
          <div className={styles.footage}>{footage} м2</div>
        </div>
      </div>
    </div>
  );
};

export default ItemProjects;
