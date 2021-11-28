import { Component } from 'react';

import { generate } from 'shortid';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  filterInputId = generate();

  render() {
    const { value, onChange } = this.props;

    return (
      <>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input value={value} onChange={onChange} id={this.filterInputId} />
      </>
    );
  }
}

export default Filter;
