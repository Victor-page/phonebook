import { Component } from 'react';

import { generate } from 'shortid';

class Filter extends Component {
  filterInputId = generate();



  render() {
    return (
      <>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.filterInputId}
        ></input>
      </>
    );
  }
}

export default Filter;
