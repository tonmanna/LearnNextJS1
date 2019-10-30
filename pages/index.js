import React, { Component } from 'react';

import '../style.less';

import ContactUs from '../components/system/contactus';
import Content from '../components/system/content';
import { Layout1, Layout2 } from '../components/layouts';

class App extends Component {

  addComponent(cmp) {
    switch (cmp) {
      case 'Content': return <Content></Content>;
      case 'ContactUs': return <ContactUs></ContactUs>;

    }
  }

  render() {

    var cmp = [];
    for (var i = 0; i < 3; i++) {
      cmp.push(this.addComponent('Content'));
    }
    for (var i = 0; i < 3; i++) {
      cmp.push(this.addComponent('ContactUs'));
    }

    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
          <Layout1 pos1={cmp} pos2={cmp}></Layout1>
        </div>
      </div>
    );
  }
}
export default App;
