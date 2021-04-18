import React from 'react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { getOrInitializeStore } from 'redux/initializeStore';
import { getInitialState } from 'redux/getInitialState';
import { useApollo } from 'utils/apollo/apolloClient';

import { AppLayout } from 'components/App/AppLayout';

import 'assets/fonts.css';
import 'assets/normalize.css';
import 'assets/variables.css';
import 'assets/globals.css';
import 'assets/atom.css';
import 'assets/markup.css';

const MafitApp = ({ Component, pageProps, reduxProps }) => {
  const reduxStore = getOrInitializeStore(reduxProps);
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={reduxStore}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="shortcut icon"
            href="/public/favicon.ico"
            type="image/png"
          />
        </Head>
        <AppLayout>
          <Component />
        </AppLayout>
      </Provider>
    </ApolloProvider>
  );
};

MafitApp.getInitialProps = async (appContext: AppContext) => {
  const [appProps, reduxProps] = await Promise.all([
    App.getInitialProps(appContext),
    appContext.ctx.req && getInitialState(appContext.ctx),
  ]);

  return { reduxProps, ...appProps };
};

export default MafitApp;
