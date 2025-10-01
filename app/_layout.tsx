import { Stack } from 'expo-router';
import { ReduxProvider } from '@/lib/providers/ReduxProvider';

export default function RootLayout() {
  return (
    <ReduxProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ReduxProvider>
  );
}
