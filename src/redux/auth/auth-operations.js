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

const relogIn = createAsyncThunk('auth/relogIn', async (_, thunkAPI) => {
  const { token: persistedToken } = thunkAPI.getState().auth;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await connectionsAxios.get('/users/current');
    return data;
  } catch (error) {
    return error.message;
  }
});

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
  relogIn,
};

export default authOperations;
