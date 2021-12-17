import axios from 'axios';

const connectionsAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export { connectionsAxios };
