import { generate } from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterInputId = generate();

  const changeHandler = ({ target: { value: filterValue } }) =>
    dispatch(changeFilter(filterValue));

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input value={value} onChange={changeHandler} id={filterInputId} />
    </>
  );
};

export default Filter;
