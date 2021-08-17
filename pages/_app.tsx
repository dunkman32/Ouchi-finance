import React, { useEffect, useMemo } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@src/store';
import CustomProvider from '@src/components/CustomThemeProvider';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import Georgian from '@intl/compiled-locales/ka.json';
import English from '@intl/compiled-locales/en.json';

interface Props {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

declare global {
  type FixMeAny = any;
}

const MyApp = ({ Component, pageProps }: Props) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'ka':
        return Georgian;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      <Head>
        <title>Ouchi Finance</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomProvider Component={Component} pageProps={pageProps} />
        </PersistGate>
      </Provider>
    </IntlProvider>
  );
};

export default MyApp;
