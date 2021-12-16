import axios from 'axios';

const contactsAxios = axios.create({
  baseURL: 'https://61b44d0559c6ac0017300fbe.mockapi.io',
});

const connectionsAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export { contactsAxios, connectionsAxios };
