import styles from './Tag.module.scss';

interface TagProps {
  label: string;
  size?: 'default' | 'small';
  className?: string;
}

export function Tag({ label, size = 'default', className = '' }: TagProps) {
  const classes = [styles.tag, size === 'small' ? styles.small : '', className]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{label}</span>;
}
