import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import App from './App';
// import ContactsContext from 'context/ContactsProvider';
// import FilterContext from 'context/FilterProvider';
import store from 'redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    {/* <ContactsContext>
      <FilterContext> */}
    <Provider store={store}>
      {/* <PersistGate loading={<p>Loading...</p>} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
    {/* </FilterContext>
    </ContactsContext> */}
  </React.StrictMode>,
  document.getElementById('root')
);
