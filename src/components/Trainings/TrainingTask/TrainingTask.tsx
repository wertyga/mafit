import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { UIStarRating } from 'components/UI/UIStarRating/UIStarRating';
import { UILoader } from 'components/UI/UILoader/UILoader';
import { gfTraining } from 'goldfish/gfTraining';

import useSelector from 'hooks/useSelector';
import { setMessage } from 'redux/actions/notify/notifyActions';

import {
  useGetUserFeedbackQuery,
  useSaveFeedbackMutation,
  Feedback,
} from 'graphql/types';
import { TrainingTaskUnFilled } from './TrainingTaskUnFilled/TrainingTaskUnFilled';
import { TrainingTaskFilled } from './TrainingTaskFilled/TrainingTaskFilled';
import { updateCacheAfterSave } from './helpers';

import s from './styles.module.css';

type Props = {
  trainingId?: string;
  handleChangeTab: (t: string) => () => void;
};

export const TrainingTask: React.FC<Props> = ({
  trainingId,
  handleChangeTab,
}) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const {
    userStore: { token },
  } = useSelector('userStore');
  const [state, setState] = useState<Feedback>({
    id: '',
    status: false,
    results: '',
    foods: '',
    dayResult: '',
    rating: 0,
    date: '',
    user: {
      firstName: '',
      lastName: '',
      avatar: '',
    },
  });
  const [
    saveFeedbackHandler,
    { loading: saveLoading },
  ] = useSaveFeedbackMutation({
    onCompleted: ({ saveFeedback }) => {
      const { feedback } = saveFeedback || {};
      setState(feedback);
    },
    update: (cache, { data }) => {
      updateCacheAfterSave(cache, data, trainingId, token);
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });
  const { loading: getLoading } = useGetUserFeedbackQuery({
    variables: {
      trainingId,
      token,
    },
    onCompleted: ({ getUserFeedback: userFeedback }) => {
      setState(userFeedback.id ? userFeedback : { user: {} });
    },
    onError: e => {
      setMessage({ type: 'error', message: e.message });
    },
  });

  const handleStatus = (checked: boolean, name: string) => {
    setState(prev => ({ ...prev, status: name === 'yes' }));
  };

  const handleChangeDescription = ({ target: { value, name } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (changedRating: number) => () => {
    if (state.id) return;
    setState(prev => ({ ...prev, rating: changedRating }));
  };

  const handleSaveFeedback = async () => {
    const { status, foods, dayResult, results, rating } = state;
    const payload = {
      status,
      foods,
      dayResult,
      results,
      rating,
      token,
      trainingId,
    };
    await saveFeedbackHandler({ variables: payload });

    wrapperRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const isTaskFilled = !!state.id;
  if (getLoading) return <UILoader />;
  return (
    <div
      className={classnames('flex-column align-center', {
        pending: saveLoading,
      })}
      ref={wrapperRef}
    >
      <UIStarRating
        className="mb-6"
        rating={state.rating}
        onChange={handleRatingChange}
      />
      {!isTaskFilled && (
        <TrainingTaskUnFilled
          state={state}
          onStatusChange={handleStatus}
          onDescriptionChange={handleChangeDescription}
          handleSave={handleSaveFeedback}
        />
      )}
      {isTaskFilled && <TrainingTaskFilled {...state} />}

      {isTaskFilled && (
        <p
          className={`row ${s.answersLink}`}
          role="presentation"
          onClick={handleChangeTab(gfTraining.menu[2])}
        >
          {gfTraining.allAnswers}
        </p>
      )}
    </div>
  );
};
