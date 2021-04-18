import React from 'react';
import classnames from 'classnames';
import { TrainingsList } from 'components/Trainings/TrainingsList/TrainingsList';
import { ProductsBasket } from 'components/ProductsBasket/ProductsBasket';
import { UILoader } from 'components/UI/UILoader/UILoader';

import useSelector from 'hooks/useSelector';
import { setMarathonAction } from 'redux/actions/marathon/marathonActions';
import { setTrainingsAction } from 'redux/actions/tranings/trainingsActions';
import { setMessage } from 'redux/actions/notify/notifyActions';

import { useGetMarathonQuery, Training } from 'graphql/types';

import { MarathonStart } from '../MarathonStart/MarathonStart';
import { MarathonTitle } from '../MarathonTitle/MarathonTitle';

const ID = 'fjhlfg'; // MOCK

export const MarathonContainer = () => {
  const {
    marathonStore: { title, dateStart, dateEnd, progressIn },
    trainingsStore,
  } = useSelector(['marathonStore', 'trainingsStore']);

  const { loading } = useGetMarathonQuery({
    variables: { id: ID },
    onCompleted: ({ marathon: { trainings, ...marathon } }) => {
      setMarathonAction(marathon);
      setTrainingsAction(trainings as Training[]);
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });

  return (
    <div className={classnames({ pending: loading })}>
      {loading && <UILoader />}
      {!loading && !!title && (
        <>
          {!!title && (
            <MarathonTitle
              title={title}
              startAt={dateStart}
              finishAt={dateEnd}
            />
          )}
          <MarathonStart />
          <ProductsBasket />
          <TrainingsList list={trainingsStore} progressIn={progressIn} />
        </>
      )}
    </div>
  );
};
