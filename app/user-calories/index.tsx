import { Box } from '../../components/ui/box';
import { Text } from '../../components/ui/text';
import { calculateNutrition } from './helpers';

const UserCalories = () => {
  const resultCut = calculateNutrition({
    weightKg: 75,
    heightCm: 175,
    age: 30,
    sex: 'male',
    activityLevel: 'moderate',
    goal: 'lose', // cut calories
    goalAdjustmentPercent: 20,
  });
  return (
    <Box className='flex flex-col items-center justify-center h-screen max-w-md mx-auto'>
      {JSON.stringify(resultCut)}
      <Box className='flex flex-col gap-2 p-4 bg-neutral-800 rounded-lg'>
        <Text className='text-white'>BMR: {resultCut.BMR}</Text>
        <Text className='text-white'>TDEE: {resultCut.TDEE}</Text>
        <Text className='text-white'>
          Target Calories: {resultCut.targetCalories}
        </Text>
        <Text className='text-white'>
          Protein: {resultCut.macros.protein.grams}g (
          {resultCut.macros.protein.calories}kcal)
        </Text>
        <Text className='text-white'>
          Fat: {resultCut.macros.fat.grams}g ({resultCut.macros.fat.calories}
          kcal)
        </Text>
        <Text className='text-white'>
          Carbs: {resultCut.macros.carbs.grams}g (
          {resultCut.macros.carbs.calories}kcal)
        </Text>
      </Box>
    </Box>
  );
};

export default UserCalories;
