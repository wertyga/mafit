import React, { useMemo } from 'react';
import _flatten from 'lodash/flatten';

import useSelector from 'hooks/useSelector';
import { Marathon_Items_Types } from 'graphql/types';

import { ProductsBasket } from 'components/ProductsBasket/ProductsBasket';
import { TrainingProgress } from 'components/Trainings/TrainingProgress/TrainingProgress';
import { TrainingListItem } from 'components/Trainings/TrainingListItem/TrainingListItem';
import { MarathonStart } from '../MarathonStart/MarathonStart';

export const MarathonList = () => {
  const { trainingsStore, progressStore, startMarathonStore } = useSelector([
    'trainingsStore',
    'progressStore',
    'startMarathonStore',
  ]);

  const getComponent = (type: Marathon_Items_Types | undefined) => {
    switch (type) {
      case Marathon_Items_Types.Start:
        return MarathonStart;
      case Marathon_Items_Types.Basket:
        return ProductsBasket;
      case Marathon_Items_Types.Progress:
        return TrainingProgress;

      default:
        return TrainingListItem;
    }
  };

  const trainingsList = useMemo(() => {
    const list = trainingsStore.map(training => {
      const progress = progressStore.find(
        item => item.trainingId === training.id
      );
      if (progress) return [training, progress];
      return training;
    });

    return [startMarathonStore, ..._flatten(list)];
  }, [progressStore]);

  return (
    <div className="fluid flex-column">
      {trainingsList.map((item, i) => {
        const Component = getComponent(item.type);
        return <Component key={`marathon-list-item-${i}`} {...item} />;
      })}
    </div>
  );
};
