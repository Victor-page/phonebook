import { connect } from 'react-redux';
import * as actions from 'redux/actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />
      {/*<Controls
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      /> */}
      Counter
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counterValue,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment(5)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
