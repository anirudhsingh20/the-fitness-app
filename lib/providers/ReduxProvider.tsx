import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/lib/store';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GluestackUIProvider>{children}</GluestackUIProvider>
      </PersistGate>
    </Provider>
  );
}
