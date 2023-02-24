import { ANSWER_TYPE, BaseQuestion } from './questionTypes';


export interface QuestionerType {
  id: number,
  questionTitle: string,
  questionSubtitle: string,
  questions: BaseQuestion<ANSWER_TYPE>[]
}
