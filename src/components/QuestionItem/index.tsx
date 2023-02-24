import React, { FC, useMemo, useState } from 'react';
import { FormGroup, FormLabel, ListItem, styled, Typography } from '@mui/material';

import { ANSWER_TYPE, BaseQuestion } from '../../types/questionTypes';
import { getAnswerComponent } from './utils';
import { useUserAnswerContext } from '../../context/UserAnswerContext';
import { getIsInValidAnswer } from '../../context/utils';


export interface QuestionItemProps<T extends ANSWER_TYPE> extends BaseQuestion<T> {
}

export const StyledListItem = styled(ListItem)`
  padding-inline: 0;
  margin-block: 0;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: baseline;
`;
export const StyledForm = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: baseline;
`;

export const QuestionItem:FC<QuestionItemProps<ANSWER_TYPE>> = ({
  questionText,
  required,
  type,
  id,
  answers,
  additionalQuestions,
}) =>{
  const Component = getAnswerComponent(type);
  const [dirty, setIsDirty] = useState(false);
  const { data, errors } = useUserAnswerContext();
  const currentItem = data[id];
  const renderAdditionalQuestionsCondition = useMemo(() => Boolean(
    currentItem &&
    currentItem.type !== ANSWER_TYPE.text
      && additionalQuestions &&
    (currentItem.type === ANSWER_TYPE.single
      ? additionalQuestions.parentIds.includes(currentItem.id)
      : currentItem.answers.some(i => additionalQuestions.parentIds.includes(i)))),
  [additionalQuestions, currentItem]);


  if (!currentItem){
    return null;
  }

  const errorCondition = ((dirty && required) || errors.includes(id)) && getIsInValidAnswer(currentItem);

  return (
    <React.Fragment>
      <StyledListItem>
        <StyledForm>
          <FormLabel required={required} title={questionText}>{questionText}</FormLabel>
          <Component id={id} setIsDirty={setIsDirty} answers={answers}/>
          {errorCondition
            ? <Typography variant="subtitle2" color="error">This field required</Typography>
            : null}
        </StyledForm>
      </StyledListItem>
      {renderAdditionalQuestionsCondition && additionalQuestions ?
        additionalQuestions.questions.map((q) =>{
          return (
            <QuestionItem key={q.id} {...q}/>
          );
        }) : null}
    </React.Fragment>
  );
};