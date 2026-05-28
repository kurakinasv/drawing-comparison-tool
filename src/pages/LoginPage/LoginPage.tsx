import { useNavigate } from 'react-router';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import styles from './LoginPage.module.scss';
import { useState } from 'react';

export function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleRedirect = () => {
    navigate('/');
  };

  const handleSetRegister = () => {
    setIsLogin(false);
  };

  const handleSetLogin = () => {
    setIsLogin(true);
  };

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </h1>

      <div className={styles.card}>
        <div className={styles.fields}>
          <Input placeholder="Электронная почта" />
          <Input placeholder="Пароль" />
          {!isLogin && <Input placeholder="Повторите пароль" />}
        </div>

        <div className={styles.buttons}>
          <Button variant="primary" fullWidth onClick={handleRedirect}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>

          {isLogin && (
            <div className={styles.footer}>
              <span>Нет аккаунта?</span>
              <span className={styles.link} onClick={handleSetRegister}>
                Зарегистрироваться
              </span>
            </div>
          )}
          {!isLogin && (
            <div className={styles.footer}>
              <span>Уже есть аккаунт?</span>
              <button className={styles.link} onClick={handleSetLogin}>
                Войти
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
