// Standard imports
import { Component } from 'react';
import { v4 as uuid } from 'uuid';

// Local imports
import Clusterers from '../../clusterers';
import Canvas from './canvas';
import Controls from './controls';

export default class Clusterer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autorunEnabled: true,
      clustererControls: Clusterers[props.clustererType].getDefaultControls(),
      runStatus: '',
    };
  }

  handleChangeAutorunEnabled(autorunEnabled) {
    this.setState(prevState => ({
      ...prevState,
      autorunEnabled,
    }));
  }

  handleChangeClustererControls(clustererControls) {
    this.setState(prevState => ({
      ...prevState,
      clustererControls: {
        ...prevState.clustererControls,
        ...clustererControls,
      },
    }));
  }

  handleClickRun() {
    this.setState(prevState => ({
      ...prevState,
      runStatus: uuid(),
    }));
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className={this.props.clustererClassName}>
          <Canvas
            autorunEnabled={this.state.autorunEnabled}
            clustererControls={this.state.clustererControls}
            clustererType={this.props.clustererType}
            runStatus={this.state.runStatus}
          />
        </div>
        <div className={this.props.controlsClassName}>
          <Controls
            autorunEnabled={this.state.autorunEnabled}
            clustererControls={this.state.clustererControls}
            clustererType={this.props.clustererType}
            onChangeAutorunEnabled={x => this.handleChangeAutorunEnabled(x)}
            onChangeClustererControls={x => this.handleChangeClustererControls(x)}
            onClickRun={() => this.handleClickRun()}
          />
        </div>
      </div>
    );
  }
}
