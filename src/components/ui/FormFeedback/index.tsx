import Form from 'next/form';
import { ReactNode } from 'react';
import CheckmarkForm from '../CheckmarkForm';
import styles from './index.module.css';

const FormFeedback = (): ReactNode => {
  const handleAction = (formData: FormData) => console.log('ACTION', formData);
  return (
    <Form action={handleAction} className={styles.form}>
      <input
        type="email"
        placeholder="Введите ваш E-mail"
        className={styles.input}
        required
      />
      <CheckmarkForm />
      <button className={`${styles.btn} _hover`} type="submit">
        Получить каталог
      </button>
    </Form>
  );
};

export default FormFeedback;
