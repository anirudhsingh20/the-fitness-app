import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import {
    setUserInfo,
    updateUserField,
    completeOnboarding,
    resetOnboarding,
    setLoading,
    setError,
    clearError
} from '@/lib/store/slices/userSlice';
import { UserInfo } from '@/types/user';

export const useUser = () => {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state) => state.user);

    const updateUserInfo = (userInfo: Partial<UserInfo>) => {
        dispatch(setUserInfo(userInfo));
    };

    const updateField = (field: keyof UserInfo, value: any) => {
        dispatch(updateUserField({ field, value }));
    };

    const finishOnboarding = () => {
        dispatch(completeOnboarding());
    };

    const startOnboarding = () => {
        dispatch(resetOnboarding());
    };

    const setUserLoading = (loading: boolean) => {
        dispatch(setLoading(loading));
    };

    const setUserError = (error: string | null) => {
        dispatch(setError(error));
    };

    const clearUserError = () => {
        dispatch(clearError());
    };

    return {
        ...userState,
        updateUserInfo,
        updateField,
        finishOnboarding,
        startOnboarding,
        setUserLoading,
        setUserError,
        clearUserError,
    };
};
