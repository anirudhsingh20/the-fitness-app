// Example usage of Redux Toolkit with Redux Persist in your fitness app

import React from 'react';
import { useUser } from '@/lib/hooks/useUser';
import { useWorkout } from '@/lib/hooks/useWorkout';

// Example component showing how to use the Redux store
export const ExampleComponent = () => {
  const {
    userInfo,
    isOnboardingComplete,
    updateUserInfo,
    updateField,
    finishOnboarding,
  } = useUser();

  const { workouts, currentWorkout, createWorkout, selectCurrentWorkout } =
    useWorkout();

  const handleUpdateName = (name: string) => {
    updateField('name', name);
  };

  const handleCompleteOnboarding = () => {
    finishOnboarding();
  };

  const handleCreateWorkout = () => {
    const newWorkout = {
      id: Date.now().toString(),
      name: 'Morning Workout',
      exercises: [],
      date: new Date().toISOString(),
      duration: 30,
    };
    createWorkout(newWorkout);
  };

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {userInfo.name || 'Not set'}</p>
      <p>Age: {userInfo.age || 'Not set'}</p>
      <p>Onboarding Complete: {isOnboardingComplete ? 'Yes' : 'No'}</p>

      <h2>Workouts</h2>
      <p>Total Workouts: {workouts.length}</p>
      <p>Current Workout: {currentWorkout?.name || 'None'}</p>

      <button onClick={handleCreateWorkout}>Create New Workout</button>
    </div>
  );
};
