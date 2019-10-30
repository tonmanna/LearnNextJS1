import React from 'react';
import Header from '../headers/header';
import PropTypes from 'prop-types';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout2 = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

Layout2.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout2;
