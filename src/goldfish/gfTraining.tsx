import { TRAINING_STATUSES } from 'types/training';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';

export const gfTraining = {
  status: {
    [TRAINING_STATUSES.FAILED]: 'Не выполнено',
    [TRAINING_STATUSES.INPUT]: 'Введите данные',
    [TRAINING_STATUSES.LOCKED]: <UIIcon icon="lock" />,
    [TRAINING_STATUSES.SUCCESS]: <UIIcon icon="success" />,
    [TRAINING_STATUSES.SUCCESS]: <UIIcon icon="success" />,
    [TRAINING_STATUSES.ATTENTION]: <UIIcon icon="attention" />,
  },
  trainingDone: 'Тренировка сделана',
  results: 'Ваши выводы от просмотренного видео',
  foods: 'Что вы ели сегодня? (перечислите)',
  dayResults: 'Подведите итоги дня',
  sendResponse: 'Отправить ответ ',
  menu: ['Задание', 'Питание', 'Ответы', 'Мотивация', 'Статья'],
  approved: 'Задание принято',
  allAnswers: 'Все ответы',
};
