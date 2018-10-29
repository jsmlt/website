// Standard imports
import { Component } from 'react';

// Local imports
import Header from '../../../modules/header';
import Clusterer from '../../../modules/clusterer';

class ClustererDemo extends Component {
  render() {
    return (
      <div id="page" className="with-canvas">
        <Header />
        <div id="main">
          <Clusterer
            clustererType={this.props.clusterer}
            className="section nopadding with-sidebar"
            controlsClassName="sidebar right"
            clustererClassName="main"
          />
        </div>
      </div>
    );
  }
}

export default ClustererDemo;
