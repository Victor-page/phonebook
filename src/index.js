import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import App from './App';
import ContactsContext from 'context/ContactsProvider';
import FilterContext from 'context/FilterProvider';
import store from 'redux/store';
import { myAction, myAction2 } from 'redux/actions';

console.log(store);
console.log(store.getState());

store.dispatch(myAction);
store.dispatch(myAction2);

ReactDOM.render(
  <React.StrictMode>
    <ContactsContext>
      <FilterContext>
        <App />
      </FilterContext>
    </ContactsContext>
  </React.StrictMode>,
  document.getElementById('root')
);
