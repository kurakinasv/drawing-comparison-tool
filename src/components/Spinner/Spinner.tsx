import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SpinnerIcon from '@/assets/spinner.svg?react';

import s from './Spinner.module.scss';

const Spinner: React.FC = () => {
  return (
    <div className={s.spinner}>
      <SpinnerIcon className={s.icon} />
      <h1 className={s.title}>Загрузка...</h1>
    </div>
  );
};

export default Spinner;
