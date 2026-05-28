import { Outlet } from 'react-router';
import { Header } from '@/components/Header/Header';
import { BottomNavigation } from '@/components/BottomNavigation/BottomNavigation';
import styles from './AppLayout.module.scss';

export function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
}
