import { Component } from 'react';

import { generate } from 'shortid';

class Filter extends Component {
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
