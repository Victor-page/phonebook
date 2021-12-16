import { connectionsAxios } from '../axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    connectionsAxios.defaults.headers.common.Authorization = 'Bearer ' + token;
  },
  unset() {
    connectionsAxios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/signup', async (credentials) => {
  try {
    const { data } = await connectionsAxios.post('/users/signup', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    return error.message;
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const { data } = await connectionsAxios.post('/users/login', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    return error.message;
  }
});

const logOut = createAsyncThunk('auth/logOut', async (token) => {
  try {
    await connectionsAxios.post('users/logout');
    token.unset();
  } catch (error) {
    return error.message;
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
