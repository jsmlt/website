// Standard imports
import { connect } from 'react-redux';
import { Component } from 'react';

// Local imports
import jsmlt from '@jsmlt/jsmlt';
import Clusterers from '../../../clusterers';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverlay: true,
    };
  }

  getGridCoordinates() {
    // x1, y1, x2, y2
    return [-5, -5, 5, 5];
  }

  componentDidMount() {
    // Create canvas
    const gridCoordinates = this.getGridCoordinates();
    this.canvas = new jsmlt.UI.Canvas(this.refs.canvas, {
      continuousClick: true,
      x1: gridCoordinates[0],
      y1: gridCoordinates[1],
      x2: gridCoordinates[2],
      y2: gridCoordinates[3],
    });

    // Initialize dataset
    this.dataset = new jsmlt.Data.Dataset();

    // Handle canvas clicks
    this.canvas.addListener('click', (x, y) => {
      // Add new data point
      const datapoint = this.dataset.addDatapoint([x, y]);

      // Add newly added data point to canvas
      this.canvas.addDatapoint(datapoint);

      // Clusterer
      if (this.props.autorunEnabled) {
        this.canvasCluster(this.canvas, this.dataset);
      }

      this.setState(prevState => ({
        ...prevState,
        showOverlay: false,
      }));
    });
  }

  canvasCluster(canvas, dataset) {
    const clusterer = Clusterers[this.props.clustererType]
      .getClusterer(this.props.clustererControls);

    if (dataset.numDatapoints > 1) {
      const X = dataset.getFeaturesArray();

      clusterer.train(X);

      const assignments = clusterer.cluster(X);

      assignments.forEach((x, i) => dataset.datapoints[i].setClassIndex(x));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.autorunEnabled
        || nextProps.runStatus !== this.props.runStatus
        || nextState.showOverlay !== this.state.showOverlay
    ) {
      return true;
    }

    return false;
  }

  render() {
    if (this.canvas) {
      this.canvasCluster(this.canvas, this.dataset);
    }

    return (
      <div>
        <div
          className={`overlay ${!this.state.showOverlay && 'hide'}`}
        >
          <div>
            Click to add a data point.
          </div>
        </div>
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default Canvas;
