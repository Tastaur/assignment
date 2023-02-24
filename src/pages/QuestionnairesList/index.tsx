import React from 'react';
import { Box, Card, List, styled, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';

import { QuestionerType } from '../../types/questionerType';
import { QuestionnaireListItem } from '../../components/QuestionnaireListItem';


const StyledList = styled(List)`
  width: 100%;
  li {
    padding:16px 0;
  }
  * {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const HeaderWrapper = styled(Card)`
  background-color: white;
  width: 100%;
  padding: 32px 16px;
  border-top: 7px solid deepskyblue;
`;
const QuestionnairesList = () =>{
  const list = useLoaderData() as QuestionerType[];
  return (
    <Box
      pt="16px"
      component="section"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <HeaderWrapper>
        <Typography variant="h5"> Questionnaires from GoTech </Typography>
      </HeaderWrapper>
      <StyledList>
        {list && list.length ? list.map((item, index) =>{
          return (
            <QuestionnaireListItem key={item.id} index={index} {...item}/>
          );
        }) : null}
      </StyledList>
    </Box>
  );
};

export default QuestionnairesList;