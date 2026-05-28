import type { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
