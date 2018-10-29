// Standard imports
import { Component } from 'react';
import Slider from 'rc-slider';

// Styles
import 'rc-slider/assets/index.css';

// Element for slider with tooltip
const SliderWithTooltip = Slider.createSliderWithTooltip(Slider);

// Default controls
export const getDefaultControls = () => ({
  numEpochs: 50,
  hiddenLayers: [],
  learningRate: -1.5,
});

const ControlsLearningRate = ({ learningRate, onChange }) => {
  const marks = {
    '-4': <span>10<sup>-4</sup></span>,
    '-3': <span>10<sup>-3</sup></span>,
    '-2': <span>10<sup>-2</sup></span>,
    '-1': <span>10<sup>-1</sup></span>,
    0: <strong>10<sup>0</sup></strong>,
  };

  const formatTip = value => <span>10<sup>{value}</sup> = {(10 ** value).toFixed(4)}</span>;

  return (
    <fieldset>
      <label>Learning rate</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={learningRate}
          min={-4}
          max={0}
          onChange={onChange}
          step={0.01}
          tipFormatter={formatTip}
        />
      </div>
    </fieldset>
  );
};

// class ControlsHiddenLayers extends Component {

// };

const ControlsHiddenLayers = ({ hiddenLayers, onChange }) => {
  const hiddenLayerInputs = [];

  for (let i = 0; i < hiddenLayers.length; i += 1) {
    hiddenLayerInputs.push(
      <div
        key={i}
        className="fieldset-element"
      >
        Layer {i + 1}:
        <input
          type="number"
          value={Number.isNaN(hiddenLayers[i]) ? '' : hiddenLayers[i]}
          onChange={e => onChange([
            ...hiddenLayers.slice(0, i),
            parseInt(e.target.value, 10),
            ...hiddenLayers.slice(i + 1)]
          )}
          min={1}
          className="inline medium"
          placeholder="No. nodes"
        />
        <button
          className="inline"
          onClick={() => onChange(hiddenLayers.filter((x, j) => j !== i))}
        >x</button>
      </div>
    );
  }

  return (
    <fieldset>
      <label>Hidden layers</label>
      <div>
        {hiddenLayerInputs}
      </div>
      <button
        onClick={() => onChange([...hiddenLayers, Number.NaN])}
        className="center"
      >Add hidden layer</button>
    </fieldset>
  );
};

export default class Controls extends Component {
  handleChangeNumEpochs(numEpochs) {
    this.props.onChange({ numEpochs });
  }

  handleChangeLearningRate(learningRate) {
    this.props.onChange({ learningRate });
  }

  handleChangeHiddenLayers(hiddenLayers) {
    this.props.onChange({ hiddenLayers });
  }

  render() {
    return (
      <div>
        <fieldset>
          <label>Number of epochs</label>
          <input
            type="number"
            value={this.props.numEpochs}
            onChange={e => this.handleChangeNumEpochs(e.target.value)}
          />
        </fieldset>
        <ControlsLearningRate
          learningRate={this.props.learningRate}
          onChange={x => this.handleChangeLearningRate(x)}
        />
        <ControlsHiddenLayers
          hiddenLayers={this.props.hiddenLayers}
          onChange={x => this.handleChangeHiddenLayers(x)}
        />
      </div>
    );
  }
}
