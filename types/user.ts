export interface UserInfo {
    name?: string;
    age?: number;
    height?: number;
    weight?: number;
    strengthLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
    goal?: 'Lose weight' | 'Gain muscle' | 'Maintain weight';
}

export interface UserState {
    userInfo: UserInfo;
    isOnboardingComplete: boolean;
    isLoading: boolean;
    error: string | null;
}
