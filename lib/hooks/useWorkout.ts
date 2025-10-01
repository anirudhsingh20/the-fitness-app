import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import {
    addWorkout,
    updateWorkout,
    deleteWorkout,
    setCurrentWorkout,
    addExerciseToCurrentWorkout,
    updateExerciseInCurrentWorkout,
    removeExerciseFromCurrentWorkout,
    setLoading,
    setError,
    clearError
} from '@/lib/store/slices/workoutSlice';
import { Workout, Exercise } from '@/types/workout';

export const useWorkout = () => {
    const dispatch = useAppDispatch();
    const workoutState = useAppSelector((state) => state.workout);

    const createWorkout = (workout: Workout) => {
        dispatch(addWorkout(workout));
    };

    const modifyWorkout = (id: string, workout: Partial<Workout>) => {
        dispatch(updateWorkout({ id, workout }));
    };

    const removeWorkout = (id: string) => {
        dispatch(deleteWorkout(id));
    };

    const selectCurrentWorkout = (workout: Workout | null) => {
        dispatch(setCurrentWorkout(workout));
    };

    const addExercise = (exercise: Exercise) => {
        dispatch(addExerciseToCurrentWorkout(exercise));
    };

    const modifyExercise = (exerciseId: string, exercise: Partial<Exercise>) => {
        dispatch(updateExerciseInCurrentWorkout({ exerciseId, exercise }));
    };

    const removeExercise = (exerciseId: string) => {
        dispatch(removeExerciseFromCurrentWorkout(exerciseId));
    };

    const setWorkoutLoading = (loading: boolean) => {
        dispatch(setLoading(loading));
    };

    const setWorkoutError = (error: string | null) => {
        dispatch(setError(error));
    };

    const clearWorkoutError = () => {
        dispatch(clearError());
    };

    return {
        ...workoutState,
        createWorkout,
        modifyWorkout,
        removeWorkout,
        selectCurrentWorkout,
        addExercise,
        modifyExercise,
        removeExercise,
        setWorkoutLoading,
        setWorkoutError,
        clearWorkoutError,
    };
};
