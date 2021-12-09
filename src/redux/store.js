import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
