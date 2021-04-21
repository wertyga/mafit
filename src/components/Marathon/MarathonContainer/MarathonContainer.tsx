import React, { useState } from 'react';
import classnames from 'classnames';
import { UILoader } from 'components/UI/UILoader/UILoader';
import { UIBuffer } from 'components/UI/UIBuffer/UIBuffer';

import useConstructor from 'hooks/useConstructor';
import useSelector from 'hooks/useSelector';
import { setMarathonAction } from 'redux/actions/marathon/marathonActions';
import { setTrainingsAction } from 'redux/actions/tranings/trainingsActions';
import { setProgressAction } from 'redux/actions/progress/progressActions';
import { setStartMarathonAction } from 'redux/actions/startMarathon/startMarathonActions';
import { setMessage } from 'redux/actions/notify/notifyActions';

import { Marathon, Progress, useGetMarathonLazyQuery } from 'graphql/types';

import { MarathonTitle } from '../MarathonTitle/MarathonTitle';
import { MarathonList } from '../MarathonList/MarathonList';

const ID = 'fjhlfg'; // MOCK

export const MarathonContainer = () => {
  const {
    marathonStore: { id: marathonId, title, dateStart, dateEnd },
    userStore: { userId },
  } = useSelector(['marathonStore', 'userStore']);

  const [getMarathon, { loading }] = useGetMarathonLazyQuery({
    // fetchPolicy: 'no-cache',
    onCompleted: ({
      marathon: { trainings, startMarathon, progress, ...marathon },
    }) => {
      setProgressAction((progress as unknown) as Progress[]);
      setStartMarathonAction(startMarathon);
      setMarathonAction((marathon as unknown) as Omit<Marathon, 'trainings'>);
      setTrainingsAction(trainings);
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });

  useConstructor(() => {
    if (marathonId) return;
    getMarathon({ variables: { id: ID, userId } });
  });

  return (
    <div className={classnames({ pending: loading })}>
      {loading && <UILoader />}
      <UIBuffer className="hide-m" />
      {!loading && !!title && (
        <>
          {!!title && (
            <MarathonTitle
              title={title}
              startAt={dateStart}
              finishAt={dateEnd}
            />
          )}
          <MarathonList />
        </>
      )}
    </div>
  );
};
