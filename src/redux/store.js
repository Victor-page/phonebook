import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import counterReducer from './counter/counter-reducer';
import contactsReducer from './contacts/contacts-reducer';
import { contactsApi } from 'redux/contacts/contacts-slice';

let middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, require('redux-logger').createLogger()];
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const persistedStore = { store, persistor };

export default store;
