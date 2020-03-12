import App from 'next/app';
import React from 'react';
// import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../src/data/cssTheme';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';

// const GlobalStyle = createGlobalStyle`
// @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900&display=swap");
// body, html{
//   margin: 0;
//   font-family: ${(props) => props.theme.textFont};
//   max-width: 100vw;
// }
// *{
//   box-sizing: border-box;
// }

// `;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </>
    );
  }
}
