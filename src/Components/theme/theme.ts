import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#422AFB', 
    },
    secondary: {
      main: '#FFB547', 
    },
    background: {
      default: '#E0E5F2',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'DM Sans',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#422AFB', 
    },
    secondary: {
      main: '#FFB547', 
    },
    background: {
      default: '#1B254B',
      paper: '#24388A',
    },
  },
  typography: {
    fontFamily: 'DM Sans',
  },
});
