import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  themeType: 'main',
  palette: {
    primary: {
      main: '#000',
      lightGrey: '#E5E9EB',
      blue: '#3F6697',
      primary: '#42B7A0',
      grey: '#5B6871',
      toggleGrey: '#5B6871',
    },
    gradients: {
      main: 'linear-gradient(92.3deg, #43B8A1 0%, #68C7C6 99.15%)',
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
