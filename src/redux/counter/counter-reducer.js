import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(0, {
  [increment]: (prevState, { payload }) => prevState + payload,
  [decrement]: (prevState, { payload }) => prevState - payload,
});

const stepReducer = createReducer(15, {});

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
