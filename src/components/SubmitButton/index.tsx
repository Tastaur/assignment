import React from 'react';
import { Box, Button } from '@mui/material';

import { useUserAnswerContext } from '../../context/UserAnswerContext';


export const SubmitButton = () => {
  const { onSubmit } = useUserAnswerContext();
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button fullWidth={false} variant="contained" onClick={onSubmit}>Submit</Button>
    </Box>
  );
};