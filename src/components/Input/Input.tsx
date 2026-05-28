import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  multiline?: boolean;
  className?: string;
}

export function Input({ placeholder, value, onChange, multiline = false, className = '' }: InputProps) {
  const wrapperClass = [styles.wrapper, className].filter(Boolean).join(' ');

  if (multiline) {
    return (
      <div className={wrapperClass}>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
