// Standard imports
import { Component } from 'react';
import Slider from 'rc-slider';

// Local imports
import { ControlsMaxDepthAll } from '../decision-tree/controls';

// Styles
import 'rc-slider/assets/index.css';

// Element for slider with tooltip
const SliderWithTooltip = Slider.createSliderWithTooltip(Slider);

// Default controls
export const getDefaultControls = () => ({
  numTrees: 10,
  splittingCriterion: 'gini',
  maxDepthEnabled: false,
  maxDepth: 2,
});

const ControlsNumTrees = ({ numTrees, onChange }) => {
  const marks = {
    1: 1,
    10: 10,
    50: 50,
    100: 100,
  };

  return (
    <fieldset>
      <label>Num. trees</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={numTrees}
          min={1}
          max={100}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
};

export default class Controls extends Component {
  handleChangeNumTrees(numTrees) {
    this.props.onChange({ numTrees });
  }

  handleChangeSplittingCriterion(splittingCriterion) {
    this.props.onChange({ splittingCriterion });
  }

  handleChangeMaxDepth(maxDepth) {
    this.props.onChange({ maxDepth });
  }

  handleChangeMaxDepthEnabled(maxDepthEnabled) {
    this.props.onChange({ maxDepthEnabled });
  }

  render() {
    return (
      <div>
        <ControlsNumTrees
          numTrees={this.props.numTrees}
          onChange={x => this.handleChangeNumTrees(x)}
        />
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
        <ControlsMaxDepthAll
          maxDepthEnabled={this.props.maxDepthEnabled}
          maxDepth={this.props.maxDepth}
          onChangeMaxDepthEnabled={x => this.handleChangeMaxDepthEnabled(x)}
          onChangeMaxDepth={x => this.handleChangeMaxDepth(x)}
        />
      </div>
    );
  }
}
