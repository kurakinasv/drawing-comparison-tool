import { useAdaptive } from '@/hooks/useAdaptive';
import { Tag } from '../Tag/Tag';
import styles from './Card.module.scss';

interface CardProps {
  id: string;
  imageUrl?: string;
  date: string;
  tags: string[];
  onClick?: () => void;
}

export function Card({ imageUrl, date, tags, onClick }: CardProps) {
  const { isDesktop } = useAdaptive();

  return (
    <article className={styles.card} onClick={onClick}>
      {imageUrl ? (
        <img src={imageUrl} alt={date} className={styles.image} />
      ) : (
        <div className={styles.imagePlaceholder} />
      )}
      <p className={styles.date}>{date}</p>
      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <Tag key={i} label={tag} size={isDesktop ? 'large' : 'small'} />
        ))}
      </div>
    </article>
  );
}
