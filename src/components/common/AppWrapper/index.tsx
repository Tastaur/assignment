import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React, { FC, PropsWithChildren, Suspense } from 'react';

import { ErrorBoundary } from '../ErrorBoundary';
import { MainLayout } from '../MainLayout';
import { theme } from '../../../theme';


export const AppWrapper: FC<PropsWithChildren> = ({ children }) =>{
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <MainLayout>
            <Suspense>
              {children}
            </Suspense>
          </MainLayout>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};