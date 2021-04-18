import { getNoun } from 'utils/string';

const nounAnswers = (amount: number) =>
  getNoun(amount, 'ответ', 'ответа', 'ответов');
export const gfFeedback = {
  showMoreText: (limit: number, total: number, offset: number) => {
    const answersLeft = Math.min(limit, total - offset);
    return `Еще ${answersLeft} ${nounAnswers(answersLeft)} из ${total}`;
  },
  totalText: (total: number) => `Всего ${total} ${nounAnswers(total)}`,
};
