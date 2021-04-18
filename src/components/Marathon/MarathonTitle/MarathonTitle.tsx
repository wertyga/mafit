import { getDateMonth } from 'utils/date';

import s from './styles.module.css';

export const MarathonTitle = ({ title, startAt, finishAt }) => (
  <div className="container">
    <div className="row flex-column py-8">
      <h1 className={s.title}>{title}</h1>
      <div className="flex">
        <span className={s.date}>{getDateMonth(startAt)}</span>
        <span className={`${s.date} px-2`}>-</span>
        <span className={s.date}>{getDateMonth(finishAt)}</span>
      </div>
    </div>
  </div>
);
