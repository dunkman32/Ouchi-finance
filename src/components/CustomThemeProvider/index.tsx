/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useCallback } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { ThemeProvider } from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles';

import theme from '@src/themes/theme';
import darkTheme from '@src/themes/darkTheme';
import { selectors, actions, ThemesEnum } from '@src/slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}

export default function CustomProvider({
  Component,
  pageProps,
}: Props): ReactElement {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector(selectors.selectTheme);

  const toggleTheme = useCallback(() => {
    dispatch(
      actions.changeTheme(
        currentTheme === 'dark' ? ThemesEnum.Main : ThemesEnum.Dark,
      ),
    );
  }, [currentTheme, dispatch]);
  return (
    <MuiThemeProvider theme={currentTheme === 'dark' ? darkTheme : theme}>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              position: 'absolute',
              zIndex: 9999,
              top: 0,
              display: 'none',
            }}
          >
            Change Theme
          </button>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
