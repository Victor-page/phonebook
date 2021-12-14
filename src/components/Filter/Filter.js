import { generate } from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { contactsActions } from 'redux/contacts/contacts-reducer';

const Filter = () => {
  const filterInputId = generate();

  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const changeHandler = ({ target: { value: filterValue } }) =>
    dispatch(contactsActions.changeFilter(filterValue));

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input value={value} onChange={changeHandler} id={filterInputId} />
    </>
  );
};

export default Filter;
