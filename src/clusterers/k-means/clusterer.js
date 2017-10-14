// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export default controls => (new jsmlt.Unsupervised.Neighbors.KMeans({
  numClusters: controls.numClusters,
}));
