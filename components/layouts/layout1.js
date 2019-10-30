import React from 'react';
import PropType from 'prop-types';
const Layout1 = ({ pos2, pos1 }) => (
  <div className="row">
    <div className="col-md-8">{pos2}</div>
    <div className="col-md-4">{pos1}</div>
  </div>
);

Layout1.propTypes = {
  pos1: PropType.elementType,
  pos2: PropType.elementType,
};


export default Layout1;
