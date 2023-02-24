import React, { FC } from 'react';
import { List, styled } from '@mui/material';

import { QuestionerType } from '../../../types/questionerType';
import { QuestionItem } from '../../../components/QuestionItem';
import { UserAnswerContext } from '../../../context/UserAnswerContext';
import { SubmitButton } from '../../../components/SubmitButton';


export type QuestionnaireBodyProps = Pick<QuestionerType, 'questions'>;

export const StyledList = styled(List)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  * {
    width: 100%;
  }
`;
export const QuestionnaireBody:FC<QuestionnaireBodyProps> = ({ questions }) =>{
  return (
    <UserAnswerContext questions={questions}>
      <StyledList>
        {questions.map(item =>{
          return (
            <QuestionItem key={item.id} {...item}/>
          );
        })}
      </StyledList>
      <SubmitButton/>
    </UserAnswerContext>
  );

};