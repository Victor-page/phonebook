import { connect } from 'react-redux';
import * as actions from 'redux/actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment(5)),
  onDecrement: () => dispatch(actions.decrement(5)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
