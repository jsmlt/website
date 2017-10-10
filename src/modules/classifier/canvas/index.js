// Standard imports
import { connect } from 'react-redux';
import { Component } from 'react';

// Local imports
import jsmlt from '@jsmlt/jsmlt';
import Classifiers from '../../../classifiers';

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
      // Class index of new data point
      const classIndex = this.props.classIndex;

      // Add new data point
      const datapoint = this.dataset.addDatapoint([x, y]);
      datapoint.setClassIndex(classIndex);

      // Add newly added data point to canvas
      this.canvas.addDatapoint(datapoint);

      // Classifier
      if (this.props.autorunEnabled) {
        this.canvasClassify(this.canvas, this.dataset);
      }

      this.setState(prevState => ({
        ...prevState,
        showOverlay: false,
      }));
    });
  }

  canvasClassify(canvas, dataset) {
    const classifier = Classifiers[this.props.classifierType]
      .getClassifier(this.props.classifierControls);

    if (dataset.numDatapoints > 1) {
      const X = dataset.getFeaturesArray();

      const labels = dataset.getLabelsArray();
      const encoder = new jsmlt.Preprocessing.LabelEncoder();
      const y = encoder.encode(labels);

      classifier.train(X, y);

      if (this.props.classifierType === 'binarysvm') {
        dataset.getDataPoints().forEach((x, i) => {
          x.setMarked(classifier.supportVectors[i]);
        });
      }
      // Generate predictions for grid
      const boundaries = new jsmlt.Classification.Boundaries();

      const classIndexBoundaries = boundaries.calculateClassifierDecisionBoundaries(
        classifier,
        51,
        this.getGridCoordinates()
      );

      // Convert boundary keys (class indices) to labels
      const labelBoundaries = Object.keys(classIndexBoundaries).reduce((a, x) => ({
        ...a,
        [encoder.decode(x)]: classIndexBoundaries[x],
      }), {});

      // Store class boundaries in canvas
      canvas.setClassBoundaries(labelBoundaries);
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
    return (
      <div>
        <div
          className={`overlay ${!this.state.showOverlay && 'hide'}`}
        >
          <div>
            Click to add a data point. Change the class of new data points in the sidebar.
          </div>
        </div>
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default Canvas;
