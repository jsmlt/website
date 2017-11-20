// Standard imports
import { Component } from 'react';

// Default controls
export const getDefaultControls = () => ({
  splittingCriterion: 'gini',
});

export default class Controls extends Component {
  handleChangeSplittingCriterion(splittingCriterion) {
    this.props.onChange({ splittingCriterion });
  }

  render() {
    return (
      <div>
        <fieldset>
          <label>Splitting criterion</label>
          <select
            onChange={e => this.handleChangeSplittingCriterion(e.target.value)}
            value={this.props.splittingCriterion}
          >
            <option value="gini">Gini coefficient</option>
            <option value="entropy">Information gain</option>
          </select>
        </fieldset>
      </div>
    );
  }
}
