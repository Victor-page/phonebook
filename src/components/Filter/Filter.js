import { generate } from 'shortid';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const filterInputId = generate();

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input value={value} onChange={onChange} id={filterInputId} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
