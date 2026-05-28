import { useNavigate } from 'react-router';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import styles from './ComparePage.module.scss';

export function ComparePage() {
  const navigate = useNavigate();

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
          onClick={() => navigate('/compare/result')}
        >
          Сравнить
        </Button>
      </div>
    </section>
  );
}
