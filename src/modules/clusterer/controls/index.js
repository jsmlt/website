// Local imports
import Clusterers from '../../../clusterers';

const Controls = ({
  clustererType,
  autorunEnabled, onChangeAutorunEnabled,
  clustererControls, onChangeClustererControls,
  onClickRun,
}) => {
  const ClustererControls = (Clusterers[clustererType] && Clusterers[clustererType].Controls)
    ? Clusterers[clustererType].Controls : null;

  return (
    <div>
      <div className="content">
        {ClustererControls &&
          <div className="form-sub">
            <ClustererControls
              onChange={onChangeClustererControls}
              {...clustererControls}
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
