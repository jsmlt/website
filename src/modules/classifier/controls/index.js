// Local imports
import Classifiers from '../../../classifiers';

const Controls = ({
  classifierType,
  classIndex, onChangeClassIndex,
  autorunEnabled, onChangeAutorunEnabled,
  classifierControls, onChangeClassifierControls,
  onClickRun,
}) => {
  const ClassifierControls = (Classifiers[classifierType] && Classifiers[classifierType].Controls)
    ? Classifiers[classifierType].Controls : null;

  return (
    <div>
      <div className="content">
        <fieldset>
          <label>Class for new data points:</label>
          <select
            onChange={e => onChangeClassIndex(e.target.value)}
            value={classIndex}
          >
            <option value="0">Class 0</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
          </select>
        </fieldset>
        {ClassifierControls &&
          <div className="form-sub">
            <ClassifierControls
              onChange={onChangeClassifierControls}
              {...classifierControls}
            />
          </div>
        }
      </div>
      <footer>
        <fieldset>
          <button
            onClick={onClickRun}
          >
            Run
          </button>
          <div className="optional">
            <label htmlFor="enable-autorun">
              <input
                checked={autorunEnabled}
                id="enable-autorun"
                type="checkbox"
                value="1"
                onChange={e => onChangeAutorunEnabled(e.target.checked)}
              />
              Enable autorun
            </label>
          </div>
        </fieldset>
      </footer>
    </div>
  );
};

export default Controls;
