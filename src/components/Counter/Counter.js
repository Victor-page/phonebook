import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'redux/counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import { getValue, getStep } from 'redux/counter/counter-selectors';

const Counter = () => {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  const increment = () => dispatch(actions.increment(step));
  const decrement = () => dispatch(actions.decrement(step));

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls step={step} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

export default Counter;
