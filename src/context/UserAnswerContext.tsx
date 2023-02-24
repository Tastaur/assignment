import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

import { Nullable } from '../globalTypes';
import { ANSWER_TYPE, BaseQuestion, PossibleAnswerType } from '../types/questionTypes';
import { createUserAnswer, getIsInValidAnswer } from './utils';


interface ChangeDataArgs {
  id:string;
  item: PossibleAnswerType
}

interface UserAnswerContextResponse {
  data: Record<string, PossibleAnswerType>
  changeData: (data: ChangeDataArgs) => void
  errors: string[]
  onSubmit: () => void
}


const Context = createContext<Nullable<UserAnswerContextResponse>>(null);

export const useUserAnswerContext = () => {
  const context = useContext(Context);

  if (null === context){
    throw new Error('useDndContext must be used within DndContext');
  }

  return context;
};

interface UserAnswerContextProps extends PropsWithChildren {
  questions: BaseQuestion<ANSWER_TYPE>[]
}


export const UserAnswerContext: FC<UserAnswerContextProps> = ({
  children,
  questions,
}) => {
  const startData = questions.reduce((acc, item) => {
    const setData = <T extends ANSWER_TYPE>(i: BaseQuestion<T>) => {
      acc[i.id] = { ...createUserAnswer(i.type), required: i.required, type: i.type };
      if (i.additionalQuestions){
        i.additionalQuestions.questions?.forEach(setData);
      }
    };
    setData(item);
    return acc;
  },  {} as Record<string, PossibleAnswerType> );
  const [data, setData] = useState(startData);
  const [errors, setErrors] = useState<string[]>([]);
  const changeData = ({ item, id }: ChangeDataArgs) =>{
    setData(prevState => {
      const prevItem = prevState[id];
      if (!prevItem){
        return prevState;
      }
      return { ...prevState, [id]: { ...prevItem, ...item } };
    });
  };

  const onSubmit = () =>{
    const tempErrors: string[] = [];
    Object.entries(data).forEach(([key, obj]) =>{
      if (obj.required && getIsInValidAnswer(obj)){
        tempErrors.push(key);
      }
    });
    setErrors(tempErrors.length ? tempErrors : []);
  };


  return (
    <Context.Provider value={{ data, changeData, errors, onSubmit }}>
      {children}
    </Context.Provider>
  );
};