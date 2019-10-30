import React, { Component } from 'react';

import '../style.less';

import Layout from '../components/layouts/layout1';

const fetch = require('node-fetch');
class App extends Component {
  static async getInitialProps() {
    var response = await fetch(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );
    const result = await response.json();
    return { result };
  }

  render() {
    const test = { DomainID: '111', DomainName: '222' };
    return (
      <div>
        <Layout></Layout>
        <ul>Domain ID : {test.DomainID}</ul>
        <ul>Domain Name : {test.DomainName}</ul>
        <div className="example">Hello Less!</div>
      </div>
    );
  }
}
export default App;
