import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo, UserState } from '@/types/user';

const initialState: UserState = {
    userInfo: {
        name: undefined,
        age: undefined,
        height: undefined,
        weight: undefined,
        strengthLevel: undefined,
        goal: undefined,
    },
    isOnboardingComplete: false,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<Partial<UserInfo>>) => {
            state.userInfo = { ...state.userInfo, ...action.payload };
        },
        updateUserField: (state, action: PayloadAction<{ field: keyof UserInfo; value: any }>) => {
            const { field, value } = action.payload;
            state.userInfo[field] = value;
        },
        completeOnboarding: (state) => {
            state.isOnboardingComplete = true;
        },
        resetOnboarding: (state) => {
            state.isOnboardingComplete = false;
            state.userInfo = initialState.userInfo;
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
    setUserInfo,
    updateUserField,
    completeOnboarding,
    resetOnboarding,
    setLoading,
    setError,
    clearError,
} = userSlice.actions;

export default userSlice.reducer;
