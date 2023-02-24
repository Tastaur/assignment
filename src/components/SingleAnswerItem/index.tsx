import React, { FC } from 'react';
import { FormControlLabel, Radio, RadioGroup, styled } from '@mui/material';

import { AnswerProps } from '../QuestionItem/utils';
import { useUserAnswerContext } from '../../context/UserAnswerContext';
import { ANSWER_TYPE, SingleUserAnswer } from '../../types/questionTypes';
import { OtherLabel } from '../OtherLabel';


const StyledForm = styled(RadioGroup)`
  width: initial;
  * {
    width: initial;
  }
`;

export const SingleAnswerItem: FC<AnswerProps<ANSWER_TYPE.single>> = ({ id, setIsDirty, answers }) =>{
  const { data, changeData } = useUserAnswerContext();
  const item = data[id] as SingleUserAnswer | undefined;
  if (!item || !answers){
    return  null;
  }
  const onChange = (newData?: Partial<SingleUserAnswer>) =>{
    changeData({ id, item: { ...item, ...newData } });
    setIsDirty(true);
  };
  return (
    <StyledForm
      value={item.id}
      onChange={(_e, v) =>{
        onChange(answers?.variants.find(variant => variant.id === v));
      }
      }>
      {answers?.variants.map(i =>{
        return (
          <FormControlLabel
            key={i.id}
            value={i.id}
            control={<Radio />}
            label={!i.isOtherField ? i.text : <OtherLabel
              text={item?.id === i.id ? item.text : i.text}
              onFocus={() => onChange(i)}
              setText={text => onChange({  text } )}
            />}
          />);
      })}
    </StyledForm>
  );
};
