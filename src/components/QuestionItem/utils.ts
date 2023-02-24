import { FunctionComponent } from 'react';

import { ANSWER_TYPE } from '../../types/questionTypes';
import { TextAnswer } from '../TextAnswer';
import { QuestionItemProps } from './index';
import { SingleAnswerItem } from '../SingleAnswerItem';
import { MultipleAnswerItem } from '../MultipleAnswerItem';


export const getAnswerComponent = <T extends ANSWER_TYPE>(type: T) =>{
  const ANSWER_COMPONENT_RECORD = {
    [ANSWER_TYPE.multiple]: MultipleAnswerItem,
    [ANSWER_TYPE.single]: SingleAnswerItem,
    [ANSWER_TYPE.text]: TextAnswer,
  };
  return ANSWER_COMPONENT_RECORD[type] as FunctionComponent<AnswerComponentPropsMapper[T]>;
};


export interface AnswerComponentPropsMapper {
  [ANSWER_TYPE.multiple]: AnswerProps<ANSWER_TYPE.multiple>,
  [ANSWER_TYPE.single]: AnswerProps<ANSWER_TYPE.single>,
  [ANSWER_TYPE.text]: AnswerProps<ANSWER_TYPE.text>,
}

export interface AnswerProps<T extends ANSWER_TYPE> {
  id: string
  setIsDirty: (isDirty : boolean) => void
  answers: QuestionItemProps<T>['answers']
}