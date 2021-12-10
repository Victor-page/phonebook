import { generate } from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';

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

const mapStateToProps = (state) => ({ value: state.contacts.filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: ({ target: { value: filterValue } }) =>
    dispatch(changeFilter(filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
