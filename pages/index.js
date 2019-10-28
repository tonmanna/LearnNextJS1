import React, { Component } from "react";
import "../style.less";
import Layout from "../components/layout";
const fetch = require("node-fetch");
class App extends Component {
  static async getInitialProps() {
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
    let test = {
      DomainID: "111",
      DomainName: "222"
    };
    return (
      <div>
        <Layout></Layout>
        <ul>DomainID : {test.DomainID}</ul>
        <ul>DomainName : {test.DomainName}</ul>
        <div className="example">Hello Less!</div>
      </div>
    );
  }
}
export default App;
