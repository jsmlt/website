// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export default controls => (new jsmlt.Supervised.DecisionTree.DecisionTree({
  criterion: controls.splittingCriterion,
  numFeatures: 1.0,
}));
