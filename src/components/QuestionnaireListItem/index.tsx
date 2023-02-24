import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListItem, styled, Typography } from '@mui/material';

import { QuestionerType } from '../../types/questionerType';


const CardItem = styled(Card)`
  background-color: white;
  width: 100%;
  padding: 16px;
`;

export interface QuestionnaireListItemProps extends Pick<QuestionerType, 'id' | 'questionTitle'> {
  index: number
}
export const QuestionnaireListItem = ({ id,  index, questionTitle } : QuestionnaireListItemProps) =>{
  return (
    <ListItem >
      <Link to={String(id)}>
        <CardItem>
          <Typography variant="body1">{`${index + 1}. `}{questionTitle}</Typography>
        </CardItem>
      </Link>
    </ListItem>
  );
};