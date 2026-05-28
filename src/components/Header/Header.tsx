import { User } from 'lucide-react';
import { useNavigate } from 'react-router';
import styles from './Header.module.scss';
import { useAdaptive } from '@/hooks/useAdaptive';
import Nav from './Nav/Nav';

export function Header() {
  const navigate = useNavigate();

  const { isDesktop } = useAdaptive();

  if (isDesktop) {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <Nav />
          <button
            className={styles.avatar}
            onClick={() => navigate('/login')}
            aria-label="Profile"
          >
            <User color="white" size={28} />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <button
          className={styles.avatar}
          onClick={() => navigate('/login')}
          aria-label="Profile"
        >
          <User color="white" size={28} />
        </button>
      </div>
    </header>
  );
}
