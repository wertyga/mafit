import { Training_Statuses } from 'graphql/types';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';

export const gfTraining = {
  status: {
    [Training_Statuses.Failed]: 'Не выполнено',
    [Training_Statuses.Input]: 'Введите данные',
    [Training_Statuses.Locked]: <UIIcon icon="lock" />,
    [Training_Statuses.Success]: <UIIcon icon="success" />,
    [Training_Statuses.Attention]: <UIIcon icon="attention" />,
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
