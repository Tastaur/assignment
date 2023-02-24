import React, { FC } from 'react';
import { Checkbox, FormControlLabel, RadioGroup, styled } from '@mui/material';

import { AnswerProps } from '../QuestionItem/utils';
import { useUserAnswerContext } from '../../context/UserAnswerContext';
import { ANSWER_TYPE, MultipleUserAnswer } from '../../types/questionTypes';


const StyledForm = styled(RadioGroup)`
  width: initial;
  * {
    width: initial;
  }
`;

export const MultipleAnswerItem: FC<AnswerProps<ANSWER_TYPE.multiple>> = ({ id, setIsDirty, answers }) =>{
  const { data, changeData } = useUserAnswerContext();
  const item = data[id] as MultipleUserAnswer | undefined;
  if (!item || !answers){
    return  null;
  }
  const onChange = (answerId: string) =>{
    const newAnswers = item.answers.includes(answerId)
      ? item.answers.filter(a => a !== answerId)
      : [...item.answers, answerId];
    changeData({ id, item: { ...item, answers: newAnswers } });
    setIsDirty(true);
  };
  return (
    <StyledForm>
      {answers?.variants.map(i =>{
        return (
          <FormControlLabel
            key={i.id}
            control={<Checkbox onChange={() => onChange(i.id)} checked={item?.answers.includes(i.id)}/>}
            label={i.text}
          />
        );
      })}
    </StyledForm>
  );
};
