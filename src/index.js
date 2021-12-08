import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import App from './App';
import ContactsContext from 'context/ContactsProvider';
import FilterContext from 'context/FilterProvider';

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
