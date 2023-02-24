import React, { lazy } from 'react';
import { Navigate } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from './pages/ErrorPage';
import { QUESTIONNAIRES_ROUTE } from './routerConstants';
import { questionnairesListLoader } from './pages/QuestionnairesList/loader';
import { questionnairePageLoader } from './pages/QuestionnairePage/loader';


const QuestionnairesList = lazy(()=> import('./pages/QuestionnairesList'));
const QuestionnairePage = lazy(()=> import('./pages/QuestionnairePage'));

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={QUESTIONNAIRES_ROUTE}/>,
  },
  {
    path: QUESTIONNAIRES_ROUTE,

    children: [{
      index: true,  element: <QuestionnairesList/>,
      loader: questionnairesListLoader,
    },
    { path: `${QUESTIONNAIRES_ROUTE}/:id`, loader :questionnairePageLoader, element: <QuestionnairePage/> },
    ],
  },
  { path: '*', element: <ErrorPage message="Not found"/> },
]);