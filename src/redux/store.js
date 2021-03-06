import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counter/counter-reducer';
import contactsReducer from './contacts/contacts-reducer';
import { contactsApi } from 'redux/contacts/contacts-slice';
import { authReducer } from 'redux/auth';

let middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

// if (process.env.NODE_ENV === 'development') {
//   middleware = [...middleware, require('redux-logger').createLogger()];
// }

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistedStore = { store, persistor };

export const persistor = persistStore(store);
