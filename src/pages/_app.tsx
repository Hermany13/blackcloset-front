// import App, { AppProps, AppContext } from 'next/app';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import NProgress from 'nprogress';

import defaultTheme from 'styles/themes/default';
import 'styles/global.css';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeError', () => {
      NProgress.done();
    });

    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    return () => {
      router.events.off('routeChangeError', () => null);
      router.events.off('routeChangeComplete', () => null);
      router.events.off('routeChangeStart', () => null);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <title>My page</title>
      <Head>
        <meta
          name="viewport"
          content="height=device-height,
                      width=device-width, initial-scale=1.0"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
