import React, { Component } from 'react';
import '../style.less';
import Layout from '../components/layouts/layout1';
import fetch from 'node-fetch';
import PropTypes from 'prop-types';
class AboutPage extends Component {
  static async getInitialProps() {
    var response = await fetch(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );
    const result = await response.json();
    return {
      result,
      about: 'about'
    };
  }

  render() {
    return (
      <div>
        <Layout></Layout>
        <div className="example">About</div>
        {this.props.result.map(value => (
          <div key={value.id}>
            <label>Title: {value.title}</label> :<label>ID: {value.id}</label>
          </div>
        ))}
      </div>
    );
  }
}

AboutPage.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default AboutPage;
