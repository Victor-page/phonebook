const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Increase for {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrease for {step}
    </button>
  </div>
);

export default Controls;
