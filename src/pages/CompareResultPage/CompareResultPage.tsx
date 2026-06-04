import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { ComparisonSlider } from '../../components/ComparisonSlider/ComparisonSlider';
import styles from './CompareResultPage.module.scss';

import imgBefore from '@/assets/frieren-1.png';
import imgAfter from '@/assets/frieren-2.png';

const MOCK_NOTES = [
  {
    id: '1',
    title: 'Заметка от 01.12.2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '2',
    title: 'Заметка от 01.12.2025',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

export function CompareResultPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Сравнение</h1>
        <Button variant="primary" size="sm" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.comparison}>
          <ComparisonSlider
            imageBefore={imgBefore}
            imageAfter={imgAfter}
            dateBefore="01.12.2023"
            dateAfter="01.12.2025"
          />
        </div>

        <div className={styles.notes}>
          <div className={styles.noteInput}>
            <div className={styles.inputWrapper}>
              <Input placeholder="Новая заметка" />
            </div>
            <button className={styles.addNoteBtn} aria-label="Add note">
              <Plus size={30} />
            </button>
          </div>

          <div className={styles.notesList}>
            {MOCK_NOTES.map((note) => (
              <article key={note.id} className={styles.noteItem}>
                <h3 className={styles.noteTitle}>{note.title}</h3>
                <p className={styles.noteText}>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
