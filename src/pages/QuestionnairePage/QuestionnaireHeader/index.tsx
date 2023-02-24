import React, { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

import { Asterisk } from '../../../components/Asterisk';
import { QuestionerType } from '../../../types/questionerType';


export type QuestionnaireHeaderProps = Pick<QuestionerType, 'questionSubtitle' | 'questionTitle'>;

const Wrapper = styled(Box)`
  box-sizing: border-box;
  background-color: white;
  border-top: 6px solid deepskyblue;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const QuestionnaireHeader: FC<QuestionnaireHeaderProps> = ({ questionTitle, questionSubtitle }) =>{
  return (
    <Wrapper>
      <Typography variant="h4">{questionTitle}</Typography>
      <Typography variant="body1">{questionSubtitle}</Typography>
      <Typography variant="subtitle2" color="error" >Required <Asterisk /></Typography>
    </Wrapper>
  );
};