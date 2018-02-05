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
  maxDepthEnabled: false,
  maxDepth: 2,
});

const ControlsMaxDepth = ({ maxDepth, onChange }) => {
  const marks = {
    1: 1,
    2: 2,
    5: 5,
    10: 10,
    20: 20,
  };

  return (
    <fieldset>
      <label>Maximum depth</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={maxDepth}
          min={1}
          max={20}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
};

export const ControlsMaxDepthAll = ({ maxDepthEnabled, maxDepth, onChangeMaxDepthEnabled,
  onChangeMaxDepth}) => (
  <fieldset>
    <label>
      <input
        onChange={e => onChangeMaxDepthEnabled(e.target.checked)}
        type="checkbox"
        checked={maxDepthEnabled}
      />
      Enable maximum depth
    </label>
    {maxDepthEnabled && <ControlsMaxDepth
      maxDepth={maxDepth}
      onChange={x => onChangeMaxDepth(x)}
    />}
  </fieldset>
);

export default class Controls extends Component {
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
