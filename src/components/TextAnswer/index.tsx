import React, { FC } from 'react';
import { Input } from '@mui/material';

import { useUserAnswerContext } from '../../context/UserAnswerContext';
import { ANSWER_TYPE, TextUserAnswer } from '../../types/questionTypes';
import { AnswerProps } from '../QuestionItem/utils';


export const TextAnswer: FC<AnswerProps<ANSWER_TYPE.text>> = ({ id, setIsDirty }) =>{
  const { data, changeData } = useUserAnswerContext();
  const currentItem  = data[id] as TextUserAnswer | undefined;
  if (!currentItem){
    return null;
  }
  return (
    <Input
      onBlur={() => setIsDirty(true)}
      placeholder="Your answer"
      value={currentItem.text}
      onChange={e => changeData({ id, item: { ...currentItem, text: e.target.value } })}
    />
  );
};