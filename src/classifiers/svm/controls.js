// Standard imports
import { Component } from 'react';
import Slider from 'rc-slider';

// Styles
import 'rc-slider/assets/index.css';

// Element for slider with tooltip
const SliderWithTooltip = Slider.createSliderWithTooltip(Slider);

// Default controls
export const getDefaultControls = () => ({
  kernel: 'linear',
  C: 0,
  sigmaSquared: 0,
  degree: 2,
  gamma: 1,
  coef0: 1,
});

const ControlsC = ({ C, onChange }) => {
  const marks = {
    '-2': <span>10<sup>-2</sup></span>,
    '-1': <span>10<sup>-1</sup></span>,
    0: <strong>10<sup>0</sup></strong>,
    1: <span>10<sup>1</sup></span>,
    2: <span>10<sup>2</sup></span>,
  };

  const formatTip = value => <span>10<sup>{value}</sup> = {(10 ** value).toFixed(2)}</span>;

  return (
    <fieldset>
      <label>C (slack parameter)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={C}
          min={-2}
          max={2}
          onChange={onChange}
          step={0.01}
          tipFormatter={formatTip}
        />
      </div>
    </fieldset>
  );
};

const ControlsSigmaSquared = ({ sigmaSquared, onChange }) => {
  const marks = {
    '-2': <span>10<sup>-2</sup></span>,
    '-1': <span>10<sup>-1</sup></span>,
    0: <strong>10<sup>0</sup></strong>,
    1: <span>10<sup>1</sup></span>,
    2: <span>10<sup>2</sup></span>,
  };

  const formatTip = value => <span>10<sup>{value}</sup> = {(10 ** value).toFixed(2)}</span>;

  return (
    <fieldset>
      <label>&sigma;<sup>2</sup> (Gaussian)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={sigmaSquared}
          min={-2}
          max={2}
          onChange={onChange}
          step={0.01}
          tipFormatter={formatTip}
        />
      </div>
    </fieldset>
  );
};

const ControlsDegree = ({ degree, onChange }) => {
  const marks = {
    0: 0,
    1: 1,
    2: 2,
    5: 5,
    10: 10,
  };

  return (
    <fieldset>
      <label>Polynomial degree</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={degree}
          min={0}
          max={10}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
};

const ControlsGamma = ({ gamma, onChange }) => {
  const marks = {
    0: 0,
    1: 1,
    10: 10,
  };

  return (
    <fieldset>
      <label>Gamma (scaling factor)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={gamma}
          min={0}
          max={10}
          step={0.01}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
};

const ControlsCoef0 = ({ coef0, onChange }) => {
  const marks = {
    0: 0,
    1: 1,
    10: 10,
  };

  return (
    <fieldset>
      <label>Bias (coefficient 0)</label>
      <div className="slider">
        <SliderWithTooltip
          included={true}
          marks={marks}
          value={coef0}
          min={0}
          max={10}
          step={0.01}
          onChange={onChange}
        />
      </div>
    </fieldset>
  );
};

export default class Controls extends Component {
  handleChangeC(C) {
    this.props.onChange({ C });
  }

  handleChangeKernel(kernel) {
    this.props.onChange({ kernel });
  }

  handleChangeSigmaSquared(sigmaSquared) {
    this.props.onChange({ sigmaSquared });
  }

  handleChangeDegree(degree) {
    this.props.onChange({ degree });
  }

  handleChangeGamma(gamma) {
    this.props.onChange({ gamma });
  }

  handleChangeCoef0(coef0) {
    this.props.onChange({ coef0 });
  }

  render() {
    const { kernel } = this.props;

    return (
      <div>
        <fieldset>
          <label>Kernel</label>
          <select
            onChange={e => this.handleChangeKernel(e.target.value)}
            value={kernel}
          >
            <option value="linear">Linear</option>
            <option value="gaussian">Gaussian</option>
            <option value="polynomial">Polynomial</option>
          </select>
        </fieldset>
        <ControlsC
          C={this.props.C}
          onChangeC={x => this.onChangeC(x)}
        />
        {kernel === 'gaussian' &&
          <ControlsSigmaSquared
            sigmaSquared={this.props.sigmaSquared}
            onChange={x => this.handleChangeSigmaSquared(x)}
          />
        }
        {kernel === 'polynomial' &&
          <div>
            <ControlsDegree
              degree={this.props.degree}
              onChange={x => this.handleChangeDegree(x)}
            />
            <ControlsGamma
              gamma={this.props.gamma}
              onChange={x => this.handleChangeGamma(x)}
            />
            <ControlsCoef0
              coef0={this.props.coef0}
              onChange={x => this.handleChangeCoef0(x)}
            />
          </div>
        }
      </div>
    );
  }
}
