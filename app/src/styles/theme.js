// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#8F2D56',
      contrastText: '#E8EEF2',
    },
    background: {
      default: '#435265',
      nav: '#33658A',
    },
    text: {
      primary: '#ffffff',
      secondary: '#33658A',
    },
    error: {
      main: '#BE8A60',
    },
    success: {
      main: '#72A276',
    },
  },
});

export default theme;
