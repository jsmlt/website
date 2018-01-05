const RunControls = ({
  autorunEnabled, onChangeAutorunEnabled,
  onClickRun,
}) => {
  return (
    <div>
      <div className="content">
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
        <fieldset>
          <h3>Step-by-step</h3>
          <button>&lt;</button>
          <button>||</button>
          <button>&gt;</button>
          <div>
            <button>Run</button> with
            <select>
              <option>1 step p/s</option>
              <option>2 step p/s</option>
              <option>5 step p/s</option>
              <option>10 step p/s</option>
            </select>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default RunControls;
