// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export default controls => (new jsmlt.Supervised.Trees.DecisionTree({
  criterion: controls.splittingCriterion,
  numFeatures: 1.0,
  maxDepth: controls.maxDepthEnabled ? controls.maxDepth : -1,
}));
