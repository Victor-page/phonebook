import { useState } from 'react';
import filterContext from './filterContext';

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('');

  const changeFilter = ({ currentTarget: { value: filterValue } }) => {
    setFilter(filterValue);
  };

  return (
    <filterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
