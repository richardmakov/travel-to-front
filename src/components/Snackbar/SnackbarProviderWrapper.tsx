// SnackbarProviderWrapper.tsx
import React from 'react';
import { SnackbarProvider } from 'notistack';

const SnackbarProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SnackbarProvider maxSnack={3}>
    {children}
  </SnackbarProvider>
);

export default SnackbarProviderWrapper;
