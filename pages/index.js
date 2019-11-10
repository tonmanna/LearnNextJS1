import React, { Component } from 'react';

import '../style.less';

import ContactUs from '../components/system/contactus';
import Content from '../components/system/content';
import Excel from '../components/system/tonysheet';
import { Layout1, Layout2 } from '../components/layouts';

import { getFirebase } from "../lib/firebase";


class HomePage extends Component {

  addComponent(cmp) {
    switch (cmp.name) {
      case 'Content': return <Content key={cmp.key}></Content>;
      case 'ContactUs': return <ContactUs key={cmp.key}></ContactUs>;
      case 'Excel': return <Excel key={cmp.key} data={cmp.data}></Excel>;
    }
  }

  static async getInitialProps() {
    var db = getFirebase().database();
    var ref = db.ref();
    var result = await new Promise((resolve) => {
      ref.once('value', function (snapshot) {
        const val = snapshot.val();
        resolve(val);
      });
    });

    return {
      data: result
    }
  }

  render() {

    var cmp = [];
    // for (var i = 0; i < 1; i++) {
    //   cmp.push(this.addComponent({ name: 'Content', key: i }));
    // }
    // for (var i = 0; i < 1; i++) {
    //   cmp.push(this.addComponent({ name: 'ContactUs', key: String(i) }));
    // }
    for (var i = 0; i < 1; i++) {
      cmp.push(this.addComponent({ name: 'Excel', key: i, data: this.props.data }));
    }

    return (
      <div className="jumbotron">
        <div className="container container-table">
          <div className="row vertical-center-row">
            <Layout1 pos2={cmp}></Layout1>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
