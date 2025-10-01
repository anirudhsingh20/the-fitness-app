interface CalculateNutritionParams {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
  goal: 'maintain' | 'lose' | 'gain';
  goalAdjustmentPercent: number;
}

interface CalculateNutritionResult {
  BMR: number;
  TDEE: number;
  targetCalories: number;
  macros: {
    protein: { grams: number; calories: number };
    fat: { grams: number; calories: number };
    carbs: { grams: number; calories: number };
  };
}

/**
 * Calculate daily calories and macronutrient targets.
 * @param {CalculateNutritionParams} params
 * @param {number} params.weightKg - Weight in kilograms
 * @param {number} params.heightCm - Height in centimeters
 * @param {number} params.age - Age in years
 * @param {"male"|"female"} params.sex - Biological sex
 * @param {"sedentary"|"light"|"moderate"|"active"|"veryActive"} params.activityLevel - Activity level
 * @param {"maintain"|"lose"|"gain"} [params.goal="maintain"] - Fitness goal
 * @param {number} [params.goalAdjustmentPercent=20] - % deficit (lose) or surplus (gain)
 * @returns {CalculateNutritionResult} Nutrition calculation result
 */
export function calculateNutrition({
  weightKg,
  heightCm,
  age,
  sex,
  activityLevel,
  goal = 'maintain',
  goalAdjustmentPercent = 20,
}: CalculateNutritionParams): CalculateNutritionResult {
  // 1. BMR calculation (Mifflin-St Jeor)
  let BMR;
  if (sex === 'male') {
    BMR = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    BMR = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  // 2. Activity factor
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const AF = activityFactors[activityLevel];
  if (!AF) throw new Error('Invalid activity level');

  // 3. TDEE
  const TDEE = BMR * AF;

  // 4. Adjust target calories based on goal
  let targetCalories;
  if (goal === 'lose') {
    targetCalories = TDEE * (1 - goalAdjustmentPercent / 100);
  } else if (goal === 'gain') {
    targetCalories = TDEE * (1 + goalAdjustmentPercent / 100);
  } else {
    targetCalories = TDEE; // maintain
  }

  // 5. Macros calculation with defaults
  // Protein: 1.8 g/kg
  const proteinGrams = 1.8 * weightKg;
  const proteinKcal = proteinGrams * 4;

  // Fat: 25% of target calories
  const fatKcal = targetCalories * 0.25;
  const fatGrams = fatKcal / 9;

  // Carbs: remaining calories
  const carbKcal = targetCalories - (proteinKcal + fatKcal);
  const carbGrams = carbKcal / 4;

  return {
    BMR: Math.round(BMR),
    TDEE: Math.round(TDEE),
    targetCalories: Math.round(targetCalories),
    macros: {
      protein: {
        grams: Math.round(proteinGrams),
        calories: Math.round(proteinKcal),
      },
      fat: {
        grams: Math.round(fatGrams),
        calories: Math.round(fatKcal),
      },
      carbs: {
        grams: Math.round(carbGrams),
        calories: Math.round(carbKcal),
      },
    },
  };
}
