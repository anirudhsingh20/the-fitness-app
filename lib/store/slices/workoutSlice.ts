import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Workout, Exercise, WorkoutState } from '@/types/workout';

const initialState: WorkoutState = {
    workouts: [],
    currentWorkout: null,
    isLoading: false,
    error: null,
};

const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        addWorkout: (state, action: PayloadAction<Workout>) => {
            state.workouts.push(action.payload);
        },
        updateWorkout: (state, action: PayloadAction<{ id: string; workout: Partial<Workout> }>) => {
            const { id, workout } = action.payload;
            const index = state.workouts.findIndex(w => w.id === id);
            if (index !== -1) {
                state.workouts[index] = { ...state.workouts[index], ...workout };
            }
        },
        deleteWorkout: (state, action: PayloadAction<string>) => {
            state.workouts = state.workouts.filter(workout => workout.id !== action.payload);
        },
        setCurrentWorkout: (state, action: PayloadAction<Workout | null>) => {
            state.currentWorkout = action.payload;
        },
        addExerciseToCurrentWorkout: (state, action: PayloadAction<Exercise>) => {
            if (state.currentWorkout) {
                state.currentWorkout.exercises.push(action.payload);
            }
        },
        updateExerciseInCurrentWorkout: (state, action: PayloadAction<{ exerciseId: string; exercise: Partial<Exercise> }>) => {
            if (state.currentWorkout) {
                const { exerciseId, exercise } = action.payload;
                const index = state.currentWorkout.exercises.findIndex(e => e.id === exerciseId);
                if (index !== -1) {
                    state.currentWorkout.exercises[index] = { ...state.currentWorkout.exercises[index], ...exercise };
                }
            }
        },
        removeExerciseFromCurrentWorkout: (state, action: PayloadAction<string>) => {
            if (state.currentWorkout) {
                state.currentWorkout.exercises = state.currentWorkout.exercises.filter(
                    exercise => exercise.id !== action.payload
                );
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    addWorkout,
    updateWorkout,
    deleteWorkout,
    setCurrentWorkout,
    addExerciseToCurrentWorkout,
    updateExerciseInCurrentWorkout,
    removeExerciseFromCurrentWorkout,
    setLoading,
    setError,
    clearError,
} = workoutSlice.actions;

export default workoutSlice.reducer;
