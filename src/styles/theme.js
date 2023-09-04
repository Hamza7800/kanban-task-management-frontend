import { createTheme } from '@mui/system';


const lightTheme = createTheme({
  palette: {
    background: {
      default: '#F4F7FD',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#000000',
      dark: '#e4ebfa', // $lightGrayLine
    },
    secondary: {
      main: '#828fa3',
    },
    error: {
      main: '#EA5555',
    },
    info: {
      main: '#635FC7',
    },
    text: {
      primary: '#000000',
      secondary: '#828fa3',
    },
  },
  shadows: [
    'none',
    '0px 2px 4px 0px rgba(54, 78, 126, 0.101545)',
  ],
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#20212C', // $veryDarkGray
      paper: '#2B2C37', // $darkGray
    },
    primary: {
      main: '#2B2C37', // $darkGray
      dark: '#3e3f4e',// $darkGrayLine
    },
    secondary: {
      main: '#FFFFFF', // $white
    },
    error: {
      main: '#EA5555',
    },
    text: {
      primary: '#FFFFFF', // $white
      secondary: '#FFFFFF', // $white
    },
  },
  shadows: [
    'none',
    '0px 2px 4px 0px rgba(255, 255, 255, 0.5)', // $checked
  ],
});

export { lightTheme, darkTheme };
