import { useNavigate, useParams } from 'react-router';
import { Plus } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Tag } from '../../components/Tag/Tag';
import styles from './ViewPostPage.module.scss';

import img1 from '@/assets/mona.png';

const MOCK_CONTENT = {
  imageUrl: img1,
  tags: ['Тег', 'Тег'],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export function ViewPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  void id;

  return (
    <section className={styles.page}>
      <Button variant="secondary" onClick={() => navigate('/')}>
        Назад
      </Button>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={MOCK_CONTENT.imageUrl} alt="Post" className={styles.image} />

          <div className={styles.tags}>
            {MOCK_CONTENT.tags.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
            <button className={styles.addTagBtn} aria-label="Add tag">
              <Plus size={20} />
            </button>
          </div>

          <p className={styles.text}>{MOCK_CONTENT.text}</p>
        </div>

        <Button variant="primary" className={styles.editButton} onClick={() => navigate(`/create`)}>
          Редактировать
        </Button>
      </div>
    </section>
  );
}
