import React, { Component } from "react";
const fetch = require("node-fetch");
class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  static async getInitialProps({ Component, router, ctx }) {
    var response = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const result = await response.json();
    return {
      result
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul></ul>
      </div>
    );
  }
}
export default App;
