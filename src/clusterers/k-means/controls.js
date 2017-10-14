// Standard imports
import { Component } from 'react';

// Styles
import 'rc-slider/assets/index.css';

// Default controls
export const getDefaultControls = () => ({
  numClusters: 3,
});

export default class Controls extends Component {
  handleChangeNumClusters(numClusters) {
    this.props.onChange({ numClusters });
  }

  render() {
    return (
      <div>
        <fieldset>
          <label>k (num. clusters)</label>
          <input
            type="number"
            value={this.props.numClusters}
            onChange={e => this.handleChangeNumClusters(e.target.value)}
          />
        </fieldset>
      </div>
    );
  }
}
