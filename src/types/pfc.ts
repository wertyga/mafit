export enum AIM_TYPES {
  LOOSE_FAT = 'looseFat',
  GET_MUSCLES = 'getMuscles',
  SUSTENANCE = 'sustenanceWeight',
}

export type PFCCalculateFormulaType = Record<
  'fats' | 'protein' | 'carbs',
  number
>;
