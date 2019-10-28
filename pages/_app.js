import app from "next/app";
const fetch = require("node-fetch");

export default class MyApp extends app {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = app.getInitialProps({ Component, router, ctx });
    var response = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    let data = response.json();

    if (ctx.req.headers.host.match(/localhost/)) {
      pageProps = {
        ...pageProps,
        renderFrom: "mydomain",
        headers: ctx.req.headers,
        api: data
      };
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <section id="app">
        <Component {...pageProps} />
      </section>
    );
  }
}
