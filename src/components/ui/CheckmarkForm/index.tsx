'use client';
import { PATHS } from '@/data';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import styles from './index.module.css';

const CheckmarkForm = (): ReactNode => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <label htmlFor="check" className={styles.check}>
      <input
        type="checkbox"
        id="check"
        name="agree"
        defaultChecked={isCheck}
        required
      />
      <div
        className={`${styles._sq} _hover`}
        onClick={() => setIsCheck((prev) => !prev)}
      ></div>
      Я согласен на
      <Link href={PATHS.privacy} className={'_hover'}>
        обработку персональных данных
      </Link>
    </label>
  );
};

export default CheckmarkForm;
