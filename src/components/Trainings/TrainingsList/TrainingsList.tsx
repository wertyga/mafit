import React, { useMemo } from 'react';
import { Training } from 'graphql/types';

import { TrainingListItem } from '../TrainingListItem/TrainingListItem';
import { TrainingProgress } from '../TrainingProgress/TrainingProgress';

type Props = {
  list: Training[];
  progressIn: number;
};

export const TrainingsList: React.FC<Props> = ({ list = [], progressIn }) => {
  const sortedList = useMemo(() => {
    const result = [];
    list.forEach((training, i) => {
      if (i === 0 || i % progressIn) {
        result.push(training);
      } else {
        result.push(...[{ progress: true }, training]);
      }
    });

    return result;
  }, [list.length]);
  return (
    <div className="fluid flex-column">
      {sortedList.map(item =>
        item.progress ? (
          <TrainingProgress />
        ) : (
          <TrainingListItem key={item.title} {...item} />
        )
      )}
    </div>
  );
};
