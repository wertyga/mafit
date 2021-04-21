import { Aim, Activty } from 'graphql/types';

export const gfPFC = {
  marathonTitle: 'Расчет суточной нормы калорий и БЖУ (белки, жиры, углеводы)',
  yourGender: 'Ваш пол',
  physicalActivity: 'Коэффициент физической активности',
  chooseAim: 'Выберите вашу цель.',
  aims: {
    [Aim.LooseFat]: 'Сбросить вес',
    [Aim.GetMuscles]: 'Набрать мышечную массу',
    [Aim.Sustenance]: 'Поддержать вес',
  },
  activities: {
    [Activty.Low]:
      '1. 2 Низкая активность (тренировок мало или они отсутствуют)',
    [Activty.Little]:
      '1. 38 Малая активность (легкие тренировки 1-3 раза в неделю)',
    [Activty.Middle]:
      '1. 55 Средняя активность (среднеинтенсивные тренировки 3-5 раз в неделю)',
    [Activty.High]:
      '1. 73 Высокая активность (физическая работа и интенсивные тренировки 6-7 раз в неделю)',
    [Activty.Utimate]:
      '1. 9 Предельная активность (физическая работа и очень интенсивные тренировки/занятия спортом)',
  },

  recommendations: {
    [Aim.LooseFat]: 'Рекомендация для потери веса',
    [Aim.GetMuscles]: 'Рекомендация для <br /> набора мышечной массы',
    [Aim.Sustenance]: 'Рекомендация для поддержания веса',
  },
  dailyCal: 'Суточная норма калорий',
  byFormula: (amount: number) => `по формуле Харриса-Бенедикта ${amount} ккал`,
  minCal: (amount: number) => `минимальное количество ${amount} ккал`,
  recommendCal: (amount: number) => `рекомендованное количество ${amount} ккал`,
  dailyProtein: (amount: number) => `суточная норма белка ${amount} грамм`,
  dailyFats: (amount: number) => `суточная норма жиров ${amount} грамм`,
  dailyCarbs: (amount: number) => `суточная норма углеводов ${amount} грамм`,

  calculateText: 'Расчет',
  calculate: (type: string, cal: number) => {
    let pfc;
    if (type === 'fats') pfc = 'жира';
    if (type === 'protein') pfc = 'белка';
    if (type === 'carbs') pfc = 'угловодов';
    return `1 грамм ${pfc} — ${cal} ккал`;
  },
};

export const getRecommendationCal = (type: Aim, amount: number) => {
  return `${gfPFC.recommendations[type]} ${amount} ккал`;
};
