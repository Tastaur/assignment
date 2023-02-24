import { createTheme } from '@mui/material';


export const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#db3131',
          '&$error': {
            color: '#db3131',
          },
        },
      },
    },
  },
});