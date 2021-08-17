import React, { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@src/store';
import CustomProvider from '@src/components/CustomThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@src/shared/i18next';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}

declare global {
  type FixMeAny = any;
}

const MyApp = ({ Component, pageProps }: Props) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ouchi Finance</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CustomProvider Component={Component} pageProps={pageProps} />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </>
  );
};

export default MyApp;
