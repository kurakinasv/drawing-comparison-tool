import { Home, List, Shuffle, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import styles from './BottomNavigation.module.scss';
import { useAdaptive } from '@/hooks/useAdaptive';
import { CreatePostButton } from '../CreatePostButton';

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const { isDesktop } = useAdaptive();

  if (isDesktop) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.icons}>
        <div className={styles.iconGroup}>
          <button
            className={`${styles.iconButton} ${isActive('/') ? styles.active : ''}`}
            onClick={() => navigate('/')}
            aria-label="Home"
          >
            <Home size={36} />
          </button>
          <button
            className={`${styles.iconButton} ${isActive('/list') ? styles.active : ''}`}
            onClick={() => navigate('/')}
            aria-label="List"
          >
            <List size={36} />
          </button>
        </div>

        <div className={styles.iconGroup}>
          <button
            className={`${styles.iconButton} ${isActive('/compare') ? styles.active : ''}`}
            onClick={() => navigate('/compare')}
            aria-label="Compare"
          >
            <Shuffle size={36} />
          </button>
          <button
            className={`${styles.iconButton} ${isActive('/settings') ? styles.active : ''}`}
            onClick={() => navigate('/login')}
            aria-label="Settings"
          >
            <Settings size={36} />
          </button>
        </div>
      </div>

      <CreatePostButton />
    </nav>
  );
}
