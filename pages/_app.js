import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class CabanaTrivia extends App {
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
       <html>
         <head>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link
             rel="stylesheet"
             href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
           />
         </head>

        <CssBaseline />
        <Component {...pageProps} />
      </html>
    );
  }
}
