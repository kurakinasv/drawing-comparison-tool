import { useNavigate } from 'react-router';
import { Card } from '../../components/Card/Card';
import styles from './HomePage.module.scss';

import img1 from '@/assets/mona.png';
import img2 from '@/assets/frieren-2.png';
import img3 from '@/assets/frieren-1.png';
import { useAdaptive } from '@/hooks/useAdaptive';
import { CreatePostButton } from '@/components/CreatePostButton';

const MOCK_POSTS = [
  { id: '1', imageUrl: img1, date: '1 декабря 2025', tags: ['Тег'] },
  { id: '2', imageUrl: img2, date: '1 декабря 2025', tags: ['Тег'] },
  { id: '3', imageUrl: img3, date: '1 декабря 2025', tags: ['Тег'] },
  { id: '4', imageUrl: img1, date: '1 декабря 2025', tags: ['Тег'] },
  { id: '5', imageUrl: img2, date: '1 декабря 2025', tags: ['Тег'] },
  { id: '6', imageUrl: img3, date: '1 декабря 2025', tags: ['Тег'] },
];

export function HomePage() {
  const navigate = useNavigate();
  const { isDesktop } = useAdaptive();

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Мои записи</h1>
      <div className={styles.grid}>
        {MOCK_POSTS.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            imageUrl={post.imageUrl}
            date={post.date}
            tags={post.tags}
            onClick={() => navigate(`/post/${post.id}`)}
          />
        ))}
      </div>
      {isDesktop && <CreatePostButton />}
    </section>
  );
}
