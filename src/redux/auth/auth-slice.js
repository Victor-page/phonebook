import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authOperations.register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [authOperations.logIn.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
