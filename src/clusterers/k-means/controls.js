// Standard imports
import { Component } from 'react';

// Styles
import 'rc-slider/assets/index.css';

// Default controls
export const getDefaultControls = () => ({
  numClusters: 3,
  initialization: 'random',
});

export default class Controls extends Component {
  handleChangeNumClusters(numClusters) {
    this.props.onChange({ numClusters });
  }

  handleChangeInitialization(initialization) {
    this.props.onChange({ initialization });
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
        <fieldset>
          <label>Centroid initialization</label>
          <select
            onChange={e => this.handleChangeInitialization(e.target.value)}
            value={this.props.initialization}
          >
            <option value="random">Random</option>
            <option value="kmeans++">k-means++</option>
          </select>
        </fieldset>
      </div>
    );
  }
}
