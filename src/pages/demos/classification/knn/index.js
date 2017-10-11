// Standard imports
import { Component } from 'react';

// Local imports
import Header from '../../../../modules/header';
import Classifier from '../../../../modules/classifier';

class KNN extends Component {
  render() {
    return (
      <div id="page" className="with-canvas">
        <Header />
        <div id="main">
          <Classifier
            classifierType="KNN"
            className="section nopadding with-sidebar"
            controlsClassName="sidebar"
            classifierClassName="main"
          />
        </div>
      </div>
    );
  }
}

export default KNN;
