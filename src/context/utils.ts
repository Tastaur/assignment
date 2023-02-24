import { ANSWER_TYPE, PossibleAnswerType, UserAnswerMapper } from '../types/questionTypes';


export const createUserAnswer = <T extends ANSWER_TYPE>(type: T) => {
  const baseAnswerRecord = {
    [ANSWER_TYPE.text]: { text: '' },
    [ANSWER_TYPE.single]: { text: '', id: '' },
    [ANSWER_TYPE.multiple]: { answers: [] as string[] },
  };
  return baseAnswerRecord[type] as UserAnswerMapper[T];
};

export const getIsInValidAnswer = (obj: PossibleAnswerType) =>{
  if (obj.type === ANSWER_TYPE.single && !obj.id){
    return true;
  }
  if (obj.type === ANSWER_TYPE.multiple && !obj.answers.length){
    return true;
  }
  return 'text' in obj && !obj.text;
};