// Standard imports
import { Component } from 'react';

// Local imports
import Header from '../../../modules/header';
import Classifier from '../../../modules/classifier';

class ClassifierDemo extends Component {
  render() {
    return (
      <div id="page" className="with-canvas">
        <Header />
        <div id="main">
          <Classifier
            classifierType={this.props.classifier}
            className="section nopadding with-sidebar"
            runControlsClassName="sidebar left"
            controlsClassName="sidebar right"
            classifierClassName="main"
          />
        </div>
      </div>
    );
  }
}

export default ClassifierDemo;
