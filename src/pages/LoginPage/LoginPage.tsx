import { useNavigate } from 'react-router';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import styles from './LoginPage.module.scss';
import { useState } from 'react';

export function LoginPage() {
  const navigate = useNavigate();
  const [isLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRedirect = () => {
    navigate('/');
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const isDisabled = !email || !password;

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{isLogin ? 'Войти' : 'Регистрация'}</h1>

      <div className={styles.card}>
        <div className={styles.fields}>
          <Input
            placeholder="Электронная почта"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isLogin && (
            <Input
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          )}
        </div>

        <div className={styles.buttons}>
          <Button
            variant="primary"
            fullWidth
            onClick={handleRedirect}
            disabled={isDisabled}
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>

          {isLogin && (
            <div className={styles.footer}>
              <span>Нет аккаунта?</span>
              <span className={styles.link}>Зарегистрироваться</span>
            </div>
          )}
          {!isLogin && (
            <div className={styles.footer}>
              <span>Уже есть аккаунт?</span>
              <button className={styles.link}>Войти</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
