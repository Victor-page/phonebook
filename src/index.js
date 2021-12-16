import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import App from './App';
// import ContactsContext from 'context/ContactsProvider';
// import FilterContext from 'context/FilterProvider';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <ContactsContext>
      <FilterContext> */}
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    {/* </FilterContext>
    </ContactsContext> */}
  </React.StrictMode>,
  document.getElementById('root')
);
