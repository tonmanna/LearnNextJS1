import React from 'react';
import PropType from 'prop-types';
const Layout1 = props => (
  <div className="row">
    <div className="col-md-4">{props.pos2}</div>
    <div className="col-md-8">{props.pos1}</div>
  </div>
);

Layout1.propTypes = {
  pos1: PropType.arrayOf(PropType.element),
  pos2: PropType.arrayOf(PropType.element),
};


export default Layout1;
