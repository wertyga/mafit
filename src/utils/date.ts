import { gfTime } from 'goldfish/gfTime';

const MONTH = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const getDateMonth = (date: string) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  return `${day} ${MONTH[month]}`;
};

export const getTime = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getHours()} : ${newDate.getMinutes()}`;
};

export const getFeedbackDate = (date: string) => {
  const now = Date.now();
  const feedbackTime = new Date(date).getTime();

  if (now - feedbackTime < gfTime.hour) return gfTime.justNow;
  return `${getDateMonth(date)} ${getTime(date)}`;
};
