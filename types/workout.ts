export interface Exercise {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weight?: number;
    duration?: number; // in seconds
    restTime?: number; // in seconds
}

export interface Workout {
    id: string;
    name: string;
    exercises: Exercise[];
    date: string;
    duration: number; // in minutes
    notes?: string;
}

export interface WorkoutState {
    workouts: Workout[];
    currentWorkout: Workout | null;
    isLoading: boolean;
    error: string | null;
}
