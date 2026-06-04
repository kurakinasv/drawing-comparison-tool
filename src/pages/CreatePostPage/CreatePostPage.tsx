import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import styles from './CreatePostPage.module.scss';
import { useAdaptive } from '@/hooks/useAdaptive';

export function CreatePostPage() {
  const navigate = useNavigate();

  const { isDesktop } = useAdaptive();

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        {isDesktop && <h1 className={styles.title}>Новая запись</h1>}
        {!isDesktop && (
          <Button variant="primary" size="sm" onClick={() => navigate(`/`)}>
            Отменить
          </Button>
        )}
      </div>
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

          <div className={styles.tagsAndText}>
            <button className={styles.addTagButton}>
              <Plus size={24} />
              Добавить тег
            </button>

            <textarea
              className={styles.textarea}
              placeholder="Введите описание"
            />
          </div>
        </div>

        <div className={styles.buttons}>
          {isDesktop && (
            <Button
              variant="secondary"
              className={styles.saveButton}
              onClick={() => navigate(`/`)}
            >
              Отменить
            </Button>
          )}
          <Button
            variant="primary"
            className={styles.saveButton}
            onClick={() => navigate(`/post/1`)}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </section>
  );
}
