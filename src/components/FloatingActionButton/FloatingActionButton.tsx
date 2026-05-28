import { Plus } from 'lucide-react';
import styles from './FloatingActionButton.module.scss';

interface FloatingActionButtonProps {
  onClick?: () => void;
  size?: number;
}

export function FloatingActionButton({ onClick, size = 24 }: FloatingActionButtonProps) {
  return (
    <button className={styles.fab} onClick={onClick} aria-label="Add">
      <Plus size={size} />
    </button>
  );
}
