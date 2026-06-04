import { useNavigate } from 'react-router';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import styles from './ComparePage.module.scss';
import { useState } from 'react';
import { Spinner } from '@/components/Spinner';

export function ComparePage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onCompareClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate('/compare/result');
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <section className={styles.spinner}>
        <Spinner />
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Сравнение</h1>

      <div className={styles.form}>
        <div className={styles.inputs}>
          <Input placeholder="Дата первой работы" />
          <Input placeholder="Дата второй работы" />
        </div>

        <Button
          variant="primary"
          className={styles.compareButton}
          onClick={onCompareClick}
        >
          Сравнить
        </Button>
      </div>
    </section>
  );
}
