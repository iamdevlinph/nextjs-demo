import '../styles/index.css';

import App from 'next/app';
import React from 'react';

export default class MyApp extends App {
  // https://github.com/zeit/next.js/blob/master/errors/opt-out-auto-static-optimization.md
  // static async getInitialProps({ Component, ctx }: AppContext) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
