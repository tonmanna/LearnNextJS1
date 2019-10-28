import React, { Component } from "react";
import "../style.less";
import Layout from "../components/layout";
const fetch = require("node-fetch");
class AboutPage extends Component {
  static async getInitialProps() {
    var response = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const result = await response.json();
    return {
      result,
      about: "about"
    };
  }

  render() {
    return (
      <div>
        <Layout></Layout>
        <div className="example">About</div>
        {this.props.result.map(value => (
          <div>
            <label>Title: {value.title}</label> :<label>ID: {value.id}</label>
          </div>
        ))}
      </div>
    );
  }
}
export default AboutPage;
