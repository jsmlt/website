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
      showOverlay: true,
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

  handleClickOverlay() {
    this.setState(prevState => ({
      ...prevState,
      showOverlay: false,
    }));
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className={this.props.classifierClassName}>
          {this.state.showOverlay &&
            <div className="overlay" onClick={() => this.handleClickOverlay()}>
              <div>
                Click to add a data point. Change the class of new data points in the sidebar.
              </div>
            </div>
          }
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
