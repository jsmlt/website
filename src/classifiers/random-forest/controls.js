// Standard imports
import { Component } from 'react';
import Slider from 'rc-slider';

// Styles
import 'rc-slider/assets/index.css';

// Element for slider with tooltip
const SliderWithTooltip = Slider.createSliderWithTooltip(Slider);

// Default controls
export const getDefaultControls = () => ({
  splittingCriterion: 'gini',
  numTrees: 10,
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
  handleChangeSplittingCriterion(splittingCriterion) {
    this.props.onChange({ splittingCriterion });
  }

  handleChangeNumTrees(numTrees) {
    this.props.onChange({ numTrees });
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
        <ControlsNumTrees
          numTrees={this.props.numTrees}
          onChange={x => this.handleChangeNumTrees(x)}
        />
      </div>
    );
  }
}
