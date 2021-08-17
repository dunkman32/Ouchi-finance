import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  themeType: 'main',
  palette: {
    primary: {
      main: '#000',
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
