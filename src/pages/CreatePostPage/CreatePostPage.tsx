import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import styles from './CreatePostPage.module.scss';

export function CreatePostPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.page}>
      <Button variant="secondary" onClick={() => navigate('/')}>
        Отменить
      </Button>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div
            className={styles.dropzone}
            role="button"
            aria-label="Upload image"
            tabIndex={0}
          >
            <div className={styles.dropzoneIcon}>
              <Plus size={80} strokeWidth={1.5} />
            </div>
          </div>

          <button className={styles.addTagButton}>
            <Plus size={24} />
            Добавить тег
          </button>

          <textarea
            className={styles.textarea}
            placeholder="Введите описание"
          />
        </div>

        <Button
          variant="primary"
          className={styles.saveButton}
          onClick={() => navigate(`/post/1`)}
        >
          Сохранить
        </Button>
      </div>
    </section>
  );
}
