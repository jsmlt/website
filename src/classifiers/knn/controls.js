// Standard imports
import { Component } from 'react';

// Styles
import 'rc-slider/assets/index.css';

// Default controls
export const getDefaultControls = () => ({
  numNeighbours: 3,
});

export default class Controls extends Component {
  handleChangeNumNeighbours(numNeighbours) {
    this.props.onChange({ numNeighbours });
  }

  render() {
    return (
      <div>
        <fieldset>
          <label>k (num. neighbours)</label>
          <input
            type="number"
            value={this.props.numNeighbours}
            onChange={e => this.handleChangeNumNeighbours(e.target.value)}
          />
        </fieldset>
      </div>
    );
  }
}
