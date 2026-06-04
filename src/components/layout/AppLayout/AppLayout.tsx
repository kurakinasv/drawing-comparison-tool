import { Outlet, useLocation } from 'react-router';
import { Header } from '@/components/Header/Header';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';
import styles from './AppLayout.module.scss';

export function AppLayout() {
  const currentPath = useLocation();

  const isLoginPage = currentPath.pathname === '/login';

  return (
    <div className={styles.layout}>
      {!isLoginPage && <Header />}
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
}
