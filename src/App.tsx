import React from 'react';
import { RouterProvider } from 'react-router';

import { AppWrapper } from './components/common/AppWrapper';
import { routes } from './routes';


function App(){
  return (
    <AppWrapper>
      <RouterProvider router={routes}/>
    </AppWrapper>
  );
}

export default App;
