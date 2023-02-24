import { Box } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router';

import { ErrorPage } from '../ErrorPage';
import { QuestionerType } from '../../types/questionerType';
import { QuestionnaireHeader } from './QuestionnaireHeader';
import { QuestionnaireBody } from './QuestionnaireBody';


const QuestionnairePage = () =>{
  const questionnaire = useLoaderData() as QuestionerType;
  if (0 === Object.keys(questionnaire).length){
    return <ErrorPage message="Questionnaire doesn't exist" />;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="16px"
      component="section"
      padding="16px"
    >
      <QuestionnaireHeader
        questionTitle={questionnaire.questionTitle}
        questionSubtitle={questionnaire.questionSubtitle}
      />
      <QuestionnaireBody questions={questionnaire.questions}/>
    </Box>
  );
};


export default QuestionnairePage;