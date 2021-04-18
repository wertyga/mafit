import { PFCCalculateFormulaType } from 'types/pfc';

export const pfcPercentage = (
  dailyProtein: number,
  dailyFats: number,
  dailyCarbs: number,
  calculate: PFCCalculateFormulaType
) => {
  const protein = calculate.protein * dailyProtein;
  const fats = calculate.fats * dailyProtein;
  const carbs = calculate.carbs * dailyProtein;
  const onePer = (protein + carbs + fats) / 100;

  const proteinPercent = protein / onePer;
  const fatsPercent = fats / onePer;
  const carbsPercent = carbs / onePer;
  return [
    {
      name: 'protein',
      percent: proteinPercent,
      color: 'var(--color-main)',
    },
    {
      name: 'fats',
      percent: proteinPercent + fatsPercent,
      color: 'var(--color-accent)',
    },
    {
      name: 'carbs',
      percent: proteinPercent + fatsPercent + carbsPercent,
      color: 'var(--color-blue)',
    },
  ];
};
