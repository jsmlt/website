// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export default controls => (new jsmlt.Supervised.NeuralNetwork.FullyConnected({
  numEpochs: controls.numEpochs,
  hiddenLayers: controls.hiddenLayers.filter(x => !Number.isNaN(x) && x > 0),
  learningRate: 10 ** controls.learningRate,
}));
