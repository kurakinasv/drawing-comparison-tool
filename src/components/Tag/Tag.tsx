import styles from './Tag.module.scss';

interface TagProps {
  label: string;
  size?: 'default' | 'small' | 'large';
  className?: string;
}

const tagSizeClasses = {
  default: styles.default,
  small: styles.small,
  large: styles.large,
};

export function Tag({ label, size = 'default', className = '' }: TagProps) {
  const classes = [styles.tag, tagSizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{label}</span>;
}
