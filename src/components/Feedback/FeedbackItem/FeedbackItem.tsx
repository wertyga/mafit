import React from 'react';
import classnames from 'classnames';
import { UIButton } from 'components/UI/UIButton/UIButton';
import { gfTraining } from 'goldfish/gfTraining';
import { gfCommon } from 'goldfish/gfCommon';
import { UserFeedback } from 'components/Common/UserFeedback/UserFeedback';
import { Feedback } from 'graphql/types';
import { ClassName } from 'types/root';

import s from './styles.module.css';

type Props = Omit<Feedback, 'trainingId'> & {
  isOwn?: boolean;
  className?: ClassName;
};

export const FeedbackItem: React.FC<Props> = ({
  isOwn,
  status,
  results,
  foods,
  dayResult,
  date,
  user,
  className,
}) => {
  return (
    <div className={classnames(s.wrapper, className)}>
      <div>
        {isOwn && (
          <UIButton success className="mb-6">
            {gfTraining.approved}
          </UIButton>
        )}
        <UserFeedback
          firstName={user.firstName}
          lastName={user.lastName}
          avatar={user.avatar}
          date={date}
        />
      </div>

      <div
        className={classnames({
          [s.content]: true,
          [s.success]: isOwn,
        })}
      >
        <div className={s.itemList}>
          <h5>{gfTraining.trainingDone}</h5>
          <p>{status ? gfCommon.yes : gfCommon.no}</p>
        </div>
        <div className={s.itemList}>
          <h5>{gfTraining.results}</h5>
          <p>{results}</p>
        </div>
        <div className={s.itemList}>
          <h5>{gfTraining.foods}</h5>
          <p>{foods}</p>
        </div>
        <div className={s.itemList}>
          <h5>{gfTraining.dayResults}</h5>
          <p>{dayResult}</p>
        </div>
      </div>
    </div>
  );
};
