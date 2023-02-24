export enum ANSWER_TYPE {
  text = 'text',
  single = 'single',
  multiple = 'multiple',
}


export interface BaseQuestion<T extends ANSWER_TYPE>  {
  id: string;
  type: T;
  answers: AnswersMapper[T];
  required: boolean;
  questionText: string;
  additionalQuestions: AdditionalQuestionMapper[T]
}


export interface SingleAnswer {
  variants: AnswerVariant[];
}


export interface AdditionalQuestions<T extends ANSWER_TYPE> extends BaseQuestion<T> {
  parentIds: string[]

  questions: BaseQuestion<ANSWER_TYPE>[]
}

export interface MultipleAnswer {
  variants: Omit<AnswerVariant, 'isOtherField'>[];
}

export interface AnswerVariant {
  id: string;
  text: string;
  isOtherField?: boolean

}

export interface AnswersMapper {
  [ANSWER_TYPE.text]: null;
  [ANSWER_TYPE.single]: SingleAnswer;
  [ANSWER_TYPE.multiple]: MultipleAnswer;
}

export interface AdditionalQuestionMapper {
  [ANSWER_TYPE.text]: null;
  [ANSWER_TYPE.single]: AdditionalQuestions<ANSWER_TYPE>;
  [ANSWER_TYPE.multiple]: AdditionalQuestions<ANSWER_TYPE>;

}

export interface TextUserAnswer {
  text: string
  required: boolean
  type: ANSWER_TYPE.text
}

export interface SingleUserAnswer {
  id: string;
  text: string;
  required: boolean
  type: ANSWER_TYPE.single
}

export interface MultipleUserAnswer {
  required: boolean,
  type: ANSWER_TYPE.multiple
  answers: string[]
}

export interface UserAnswerMapper {
  [ANSWER_TYPE.text]: TextUserAnswer;
  [ANSWER_TYPE.single]: SingleUserAnswer;
  [ANSWER_TYPE.multiple]: MultipleUserAnswer;
}

export type PossibleAnswerType = TextUserAnswer | SingleUserAnswer | MultipleUserAnswer;