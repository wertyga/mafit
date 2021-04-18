import React from 'react';
import { getFeedbackDate } from 'utils/date';

import s from './styles.module.css';

type Props = {
  avatar?: string;
  firstName: string;
  lastName?: string;
  date: string;
};

export const UserFeedback: React.FC<Props> = ({
  avatar,
  firstName,
  lastName,
  date,
}) => {
  const initials = `${firstName.charAt(0).toUpperCase()}${lastName
    .charAt(0)
    .toUpperCase()}`;
  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        {!!avatar && <img src={avatar} alt="User avatar" className={s.image} />}
        {!avatar && <span className={s.initials}>{initials}</span>}
      </div>
      <div className={s.info}>
        <h3>{`${firstName} ${lastName}`}</h3>
        <span className={s.time}>{getFeedbackDate(date)}</span>
      </div>
    </div>
  );
};
