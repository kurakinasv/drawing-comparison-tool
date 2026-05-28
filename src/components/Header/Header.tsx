import { User } from 'lucide-react';
import { useNavigate } from 'react-router';
import styles from './Header.module.scss';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <button className={styles.avatar} onClick={() => navigate('/login')} aria-label="Profile">
          <User color="white" size={28} />
        </button>
      </div>
    </header>
  );
}
