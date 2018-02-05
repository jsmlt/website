// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export default controls => (new jsmlt.Supervised.Trees.RandomForest({
  criterion: controls.splittingCriterion,
  numTrees: controls.numTrees,
  numFeatures: 1.0,
  maxDepth: controls.maxDepthEnabled ? controls.maxDepth : -1,
}));
