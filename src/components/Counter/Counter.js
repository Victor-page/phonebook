import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ value }) => {
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

export default connect(mapStateToProps)(Counter);
