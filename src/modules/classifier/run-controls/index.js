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
      </div>
    </div>
  );
};

export default RunControls;
