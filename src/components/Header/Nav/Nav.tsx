import * as React from 'react';
import { Link } from 'react-router';

import s from './Nav.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li>
          <Link to="/">Мои записи</Link>
        </li>
        <li>
          <Link to="/compare">Сравнение работ</Link>
        </li>
        <li>
          <Link to="/">Настройки</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
