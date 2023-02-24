import React, { FC } from 'react';
import { Box, Input, Typography } from '@mui/material';


interface OtherLabelProps {
  onFocus: () => void
  text: string
  setText: (text:string) => void
}

export const OtherLabel:FC<OtherLabelProps> = ({  text, setText, onFocus }) =>{
  return (
    <Box>
      <Typography component="span" marginRight="4px">Other:</Typography>
      <Input
        onFocus={onFocus}
        onChange={e => {
          setText(e.target.value);
        }}
        value={text}/>
    </Box>
  );
};