import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  themeType: 'main',
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#615dfa',
      hover: '#5753e4',
    },
    box: {
      main: '#ffffff',
      border: '#dedeea',
      text: '#ffffff',
      checkedText: '#3e3f5e',
    },
    submitButton: {
      main: '#23d2e2',
      hover: '#1bc5d4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f8f8fb',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
} as ThemeOptions);

export default theme;
