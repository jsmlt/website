// Standard imports
import { Component } from 'react';
import { v4 as uuid } from 'uuid';

// Local imports
import Classifiers from '../../classifiers';
import Canvas from './canvas';
import Controls from './controls';

export default class Classifier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classIndex: 0,
      autorunEnabled: true,
      classifierControls: Classifiers[props.classifierType].getDefaultControls(),
      runStatus: '',
    };
  }

  handleChangeClassIndex(classIndex) {
    this.setState(prevState => ({
      ...prevState,
      classIndex,
    }));
  }

  handleChangeAutorunEnabled(autorunEnabled) {
    this.setState(prevState => ({
      ...prevState,
      autorunEnabled,
    }));
  }

  handleChangeClassifierControls(classifierControls) {
    this.setState(prevState => ({
      ...prevState,
      classifierControls: {
        ...prevState.classifierControls,
        ...classifierControls,
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
        <div className={this.props.classifierClassName}>
          <Canvas
            autorunEnabled={this.state.autorunEnabled}
            classifierControls={this.state.classifierControls}
            classifierType={this.props.classifierType}
            classIndex={this.state.classIndex}
            runStatus={this.state.runStatus}
          />
        </div>
        <div className={this.props.controlsClassName}>
          <Controls
            autorunEnabled={this.state.autorunEnabled}
            classifierControls={this.state.classifierControls}
            classifierType={this.props.classifierType}
            classIndex={this.state.classIndex}
            onChangeAutorunEnabled={x => this.handleChangeAutorunEnabled(x)}
            onChangeClassifierControls={x => this.handleChangeClassifierControls(x)}
            onChangeClassIndex={x => this.handleChangeClassIndex(x)}
            onClickRun={() => this.handleClickRun()}
          />
        </div>
      </div>
    );
  }
}
